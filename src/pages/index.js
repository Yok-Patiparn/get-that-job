import Head from "next/head";
import Contentsection from "../components/landing-page/Contentsection.js";
import Navigatebar from "../components/Navigatebar.js";
import Headers from "@/components/landing-page/Headers.js";
import Footer from "@/components/landing-page/Footer.js";
import Script from "next/script.js";

export default function Home() {
  return (
    <>
      <Head key={Math.random()}>
        <title>Get That Job</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://cdn.tailwindcss.com"/>
      </Head>

      <Navigatebar />
      <Headers />
      <Contentsection />
      <Footer />
    </>
  );
}

//Best JPG = Background ma
//Best PNG = Background no ma
