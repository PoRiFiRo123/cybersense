import Header from "@/components/Header";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Background Image */}
      <div className={styles.background}></div>

      {/* Header Component */}
      <Header />

      {/* Main Content */}
      <main className={styles.main}>
        <h1 className={styles.headline}>
          HEADLINE
          <br />
          COMES
          <br />
          HERE
        </h1>
        <p className={styles.tagline}>Tagline comes here</p>
        <button
          className={styles.surveyButton}
          onClick={() => router.push("/survey")}
        >
          Take the survey
        </button>
      </main>
    </div>
  );
}
