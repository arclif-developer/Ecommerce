import Head from "next/head";
// import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Error 404 | E-commerce</title>
        <meta name="description" content="Get suitable construction materials fro your projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline pt-10 pl-10">404</h1>
      </main>
    </>
  );
}

{
  /* <div className={styles.center}>
      <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      <h2 className={inter.className}>Templates</h2>
      <p className={inter.className}>Discover</p>
    </div> */
}
