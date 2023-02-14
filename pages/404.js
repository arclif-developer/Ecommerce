import Head from "next/head";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Error 404 | E-commerce</title>
        <meta name="description" content="Get suitable construction materials fro your projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}></main>
    </>
  );
}
