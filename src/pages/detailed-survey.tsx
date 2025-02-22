import Header from "@/components/Header";

export default function DetailedSurveyPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <Header />
      <h1 style={{ color: "white", fontSize: "2rem", marginTop: "50px" }}>Detailed Survey Page</h1>
      <p style={{ color: "white", fontSize: "1.2rem" }}>This is a blank page for the detailed survey.</p>
    </div>
  );
}
