import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/comps/Navbar";
import Footer from "@/comps/footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Homepage</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nihil.
        Commodi accusamus omnis, nobis vitae tenetur quia error ea, nisi
        reprehenderit eveniet perferendis eum voluptatem aspernatur quo
        consequatur excepturi dolorum!
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa impedit
        distinctio, molestias quisquam recusandae a eum reiciendis suscipit rem
        tempora. Quidem quaerat ipsa nemo ducimus soluta sit accusantium
        voluptatum aliquid.
      </p>
      <Link href="/sandy">See Queens Listing</Link>
      <Footer />
    </div>
  );
}
