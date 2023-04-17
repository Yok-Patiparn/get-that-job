import Head from "next/head";
import Navigatebar from "../components/Navigatebar.js";
import Registerform from "../components/register-page/Registerform.js";
import RecruiterForm from "../components/register-page/RecruiterForm.js";
import BackgroundWoman from "../components/BackgroundWoman";
import React, { useState } from "react";
import Script from "next/script.js";

export default function Register() {
  const [activeTab, setActiveTab] = useState("regular");

  const handleClick = (tab) => {
    if (tab !== activeTab) { // เพิ่มเงื่อนไขในการใช้ setActiveTab
      setActiveTab(tab);
    }
  };

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
      <BackgroundWoman>
        <div className="mb-[32px]">
          <h3 className="mt-[32px] mb-[16px] max-[767px]:text-center text-left" id="heading3">Good choice!</h3>
          <h1 className="max-[767px]:text-center text-left" id="subtitle1">Create a new account as...</h1>
        </div>
        <div className="flex max-[767px]:justify-center justify-start space-x-4 mb-4">
          <button
            className={`border-b-4 border-[#BDBDBD] hover:border-b-[#F48FB1] ${
              activeTab === "regular"
                ? "border-b-[#F48FB1]"
                : "border-[#BDBDBD]"
            }`}
            onClick={() => handleClick("regular")}
          >
            <p id="body2 mb-[6px]">PROFESSIONAL</p>
          </button>
          <button
            className={`border-b-4 border-[#BDBDBD] hover:border-b-[#F48FB1] ${
              activeTab === "recruiter"
                ? "border-b-[#F48FB1]"
                : "border-[#BDBDBD]"
            }`}
            onClick={() => handleClick("recruiter")}
          >
            <p id="body2  mb-[6px]">RECRUITER</p>
          </button>
        </div>
        {activeTab === "regular" ? <Registerform /> : <RecruiterForm />}
      </BackgroundWoman>


    </>
  );
}
