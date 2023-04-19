import React from "react";
import SideBarRecruiter from "@/components/SidebarProfessional.js";
import { useState } from 'react';
import { useAuth,AuthProvider } from "@/contexts/authentication";
import Script from "next/script";
import Head from "next/head";
import { useRouter } from "next/router";



function JobPostings() {
  const [selectedOption, setSelectedOption] = useState('all');
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  // ที่ comment ไว้ เป็น function ความปลอดภัย หากผู้ใช้งานยังไม่ได้ login จะไม่สามารถเข้าถึงหน้านี้ได้ครับ 

  

  if (!isAuthenticated) {
    return (<>
    {typeof window !== 'undefined' && window.location.replace('/Login')}</>)
  }


  return (
    <>
        <Head key={Math.random()}>
              <title>Get That Job</title>
              <meta name="description" content="Generated by create next app" />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
              <Script src="https://cdn.tailwindcss.com"/>
            </Head>
      <SideBarRecruiter/>
      <main className="bg-white-secondary h-screen">
        <div className="max-[700px]:ml-0 ml-[240px] max-[700px]:py-[16px] py-[32px] max-[700px]:px-[64px] px-[128px]">
          <h4 className="mb-[24px]" id="heading4">
            Job Postings
          </h4>
          <p className="mb-[6px]" id="overline">
            Filter your Job Postings
          </p>
          <form className="flex flex-row flex-wrap gap-[12px]">
            <div>
              <label>
                <input
                  type="radio"
                  value="all"
                  checked={selectedOption === 'all'}
                  onChange={handleOptionChange}
                  className="mr-[3px] w-5 h-5 relative top-[4px]"
                  id="my-radio"
                />
                <span>All</span>
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="candidates"
                  checked={selectedOption === 'candidates'}
                  onChange={handleOptionChange}
                  className="mr-[3px] w-5 h-5 relative top-[4px]"
                />
                With candidates on track
              </label>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  value="closed"
                  checked={selectedOption === 'closed'}
                  onChange={handleOptionChange}
                  className="mr-[3px] w-5 h-5 relative top-[4px]"
                />
                Closed
              </label>
            </div>
          </form>
          <h6 className="mt-[20px]" id="heading6">
            4 jobs postings found
          </h6>
        </div>
      </main>
    </>
  );
}

export default JobPostings;