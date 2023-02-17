import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/Footer";
import Queens from "./sandy";

export default function Home() {
  return (
    <>
      <Head>
        <title>Queens List | Home</title>
        <meta name="keywords" content="sandys" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          nihil. Commodi accusamus omnis, nobis vitae tenetur quia error ea,
          nisi reprehenderit eveniet perferendis eum voluptatem aspernatur quo
          consequatur excepturi dolorum!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
          impedit distinctio, molestias quisquam recusandae a eum reiciendis
          suscipit rem tempora. Quidem quaerat ipsa nemo ducimus soluta sit
          accusantium voluptatum aliquid.
        </p>
        <Link className={styles.btn} href="/sandy">
          See Queens Listing
        </Link>
      </div>
    </>
  );
}
