export const openDB = async (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("SurveyDatabase", 1);
  
      request.onupgradeneeded = (event) => {
        const db = request.result;
        if (!db.objectStoreNames.contains("surveyResponses")) {
          db.createObjectStore("surveyResponses", { keyPath: "id" });
        }
      };
  
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject("IndexedDB failed to open.");
    });
  };
  
  export const saveAnswer = async (id: string, answer: string): Promise<void> => {
    const db = await openDB();
    const transaction = db.transaction("surveyResponses", "readwrite");
    const store = transaction.objectStore("surveyResponses");
    store.put({ id, answer });
  };
  
  export const getAnswer = async (id: string): Promise<string | null> => {
    return new Promise(async (resolve) => {
      const db = await openDB();
      const transaction = db.transaction("surveyResponses", "readonly");
      const store = transaction.objectStore("surveyResponses");
      const request = store.get(id);
      
      request.onsuccess = () => resolve(request.result?.answer || null);
      request.onerror = () => resolve(null);
    });
  };
  
  export const getAllAnswers = async (): Promise<Record<string, string>> => {
    return new Promise(async (resolve) => {
      const db = await openDB();
      const transaction = db.transaction("surveyResponses", "readonly");
      const store = transaction.objectStore("surveyResponses");
      const request = store.getAll();
      
      request.onsuccess = () => {
        const result: Record<string, string> = {};
        request.result.forEach((entry) => {
          result[entry.id] = entry.answer;
        });
        resolve(result);
      };
      request.onerror = () => resolve({});
    });
  };
  