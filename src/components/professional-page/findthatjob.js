import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import babyswim from "../../image/babyswim.png";
import following from "../../image/following.png";
import categorypic from "../../image/categorypic.png";
import calendar from "../../image/calendar.png";
import dollar from "../../image/dollar.png";
import Warning from "../Warning";
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import jwtDecode from "jwt-decode";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Findthatjob = () => {
  const [job, setJob] = useState([]);
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [followStatus, setFollowStatus] = useState({});
  // const [applicationStatus, setApplicationStatus] = useState({});
  const AllJob = async () => {
    try {
      const result = await axios.get("http://localhost:3000/api/findthatjob");
      setJob(result.data.job.data);
    } catch {
      console.error();
    }
  };

  // const result = await axios.get(
  //     'http://localhost:3000/api/findthatjob'
  // );
  // const result = await supabase.from("jobs_postings").find('*')

  // const handleFollowClick = (id) => {
  //     setFollowStatus({
  //         ...followStatus,
  //         [id]: !followStatus[id],
  //     });
  // };

  // const handleApplyClick = (id) => {
  //     setApplicationStatus({
  //         ...applicationStatus,
  //         [id]: !applicationStatus[id],
  //     });
  // };

  const [jobList, setJobList] = useState([]);
  const [searchMessage, setSearchMessage] = useState("");
  const [formData, setFormData] = useState({
    job_category: "",
    job_type: "",
    salary_min_range: "",
    salary_max_range: "",
  });

  // สร้าง state สำหรับเก็บข้อมูล option ที่เลือก
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  // ฟังก์ชั่นสำหรับการเปลี่ยนค่าใน form
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      job_category: selectedOption,
      job_type: selectedJobType,
    });
  };

  // ฟังก์ชั่นสำหรับการเลือก option ของ job category
  const handleSelectOption = (event) => {
    setSelectedOption(event.target.value);
  };

  // ฟังก์ชั่นสำหรับการเลือก option ของ job type
  const handleSelectJobType = (event) => {
    setSelectedJobType(event.target.value);
  };

  const handleSeeMore = (id) => {
    router.push(`find-that-job/${id}`);
  };
  //ตัด job_description ให้สั้น
  function shortenText(text, maxLength) {
    if (text !== null && text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }


    useEffect(() => {
        const token = localStorage.getItem("sb:token"); // ใช้ localStorage ในการเก็บ token
        setIsAuthenticated(!!token); 
        AllJob();
    }, [isAuthenticated]);

    if (!isAuthenticated) {
    return(
        <Warning/>
    ) ;
  }

    const filteredJobs = job.filter(item => item.job_title.toLowerCase().includes(searchMessage.toLowerCase()) || item.job_category.includes(selectedOption));

    return (
        <main className="bg-[#F5F5F6] h-screen">
            <div className="max-[700px]:ml-0 ml-[240px] max-[700px]:py-[16px] py-[32px] max-[700px]:px-[64px] px-[128px]">
                <div className="flex flex-col">
                    <div className="text-[#616161] w-[100%] h-[100%] flex-col grid mt-[10px]">
                        <div className="flex flex-col flex-wrap">
                            <h4 className="mb-[16px]" id="heading4">Find That Job</h4>
                            <p className="mb-[4px] tracking-[1.5px]" id="overline">SEARCH BY JOB TITLE OR COMPANY NAME</p>
                            <input
                                className="border-solid border border-[#F48FB1] rounded-[8px] gap-[8px] p-[8px] w-full max-w-[360px] h-[36px]"
                                placeholder="manufacturing, sales, swim"
                                type="text"
                                id="input-glasses"
                                value={searchMessage}
                                onChange={(e) => {
                                    setSearchMessage(e.target.value);
                                }}
                            />
                            <p className="max-[700px]:text-[8px] max-[700px]:leading-[10px] text-[12px] leading-[16px] font-normal">
                              {item.job_type}
                            </p>
                          </div>
                          <div className="flex gap-1 items-center">
                            <Image alt="picture" src={dollar} />
                            <p className="max-[700px]:text-[8px] max-[700px]:leading-[10px] text-[12px] leading-[16px] font-normal">{`${item.salary_min_range} - ${item.salary_max_range}`}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-between items-center min-[701px]:gap-[75px]">
                      <div className="flex gap-2 p-1 items-center flex-row w-[200px]">
                        <div>
                          <Image
                            alt="picture"
                            src={following}
                            className="w-[22px] h-[22px] border-[#F48FB1]"
                          />
                        </div>
                        <button
                          onClick={() => handleFollowClick(item.job_post_id)}
                        >
                          {followStatus[item.job_post_id]
                            ? "Following"
                            : "Follow"}
                        </button>

                        {/* <button
                          className={`bg-white border border-pink-primary rounded-md font-bold text-pink-primary py-1 px-3 hover:bg-pink-primary hover:text-white transition-colors duration-300 ${
                            followStatus
                              ? "bg-pink-primary text-white ring-2 ring-pink-primary"
                              : ""
                          }`}
                          onClick={() => setFollowStatus(!followStatus)}
                        >
                          {followStatus ? "Following" : "Follow"}
                        </button> */}
                      </div>

                      {/* <div className="flex gap-2 p-1 items-center">
                        <Image
                          alt="picture"
                          src={following}
                          className="w-[22px] h-[22px]"
                        />
                        <button>Follow</button>
                      </div> */}
                      <div className="max-[768px]:flex max-[768px]:items-center w-[160px]">
                        <button
                          className="border-[1px] border-[pink] rounded-[15px] max-[700px]:py-[3px] max-[700px]:px-[5px] py-1 px-3"
                          onClick={() => handleSeeMore(item.job_post_id)}
                        >
                          SEE MORE
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Findthatjob;

{
  /* /* export default Findthatjob;
// <div className='flex'>
//     <main className='flex flex-col flex-wrap w-full items-center' >
//         <h6 className='mb-4'>12 jobs for you</h6>
//         <div className='grid grid-cols-3 gap-[15px]'>
//             <div className='flex flex-col justify-center gap-[10px] border-[1px] border-[#E1E2E1] rounded-[8px] w-[290px] h-[170px] p-[16px] mr-[15px] shadow-[0px_0px_8px_rgba(0,0,0,0.2)]'>
//                 <div className='flex items-center gap-4'>
//                     <div>
//                         <Image src={babyswim} />
//                     </div>

//                     <div className='flex flex-col'>
//                         <div className='flex gap-1 items-center'>
//                             <Image src={categorypic} />
//                             <p id='caption'>Manufactoring</p>
//                         </div>
//                         <h6>The job title</h6>
//                         <h2 id='subtitle2'>The Company Name </h2>
//                         <div className='flex gap-4 '>
//                             <div className='flex gap-1 items-center'>
//                                 <Image src={calendar} className='h-[12.5px] w-[12.5px]' />
//                                 <p id='caption'>Full time</p>
//                             </div>
//                             <div className='flex gap-1 items-center'>
//                                 <Image src={dollar} />
//                                 <p id='caption'>2.0k - 2.5k</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//                 <div className='flex justify-between'>
//                     <div className='flex gap-2 p-1'>
//                         <Image src={following} className='w-[22px] h-[22px]' />
//                         <button >Follow</button>
//                     </div>
//                     <div>
//                         <button className='border-[1px] border-[pink] rounded-[15px] py-1 px-3'>
//                             SEE MORE
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     </main >
// </div >
// <div className='flex'>
//     <SideBarProfessional />
//     <main className='flex flex-col flex-wrap ' >
//         <h6 className='bg-black'>{data.length} jobs for you</h6>
//         {data.map((item) => { */
}
{
  /* //             <div key={item.id} className='w-1/3 p-4'>
//                 <div className='flex items-center'>
//                     <div>
//                         <Image src={item.img} />
//                     </div>

//                     <div className='flex flex-col'>
//                         <p id='caption'>{item.category}</p>
//                         <h6>{item.title}</h6>
//                         <h2 id='subtitle2'>{item.companyName}</h2>
//                         <span>
//                             <div>
//                                 <Image src={calendar} />
//                                 <p id='caption'>{item.type}</p>
//                             </div>
//                             <div>
//                                 <Image src={dollar} />
//                                 <p id='caption'>{item.salary}</p>
//                             </div>
//                         </span>

//                     </div>
//                 </div>
//                 <div className='flex justify-between'>
//                     <div className='flex'>
//                         <Image src={followStatus[item.id] ? following : notFollowing} />
//                         <button onClick={() => handleFollowClick(item.id)}>
//                             {followStatus[item.id] ? 'FOLLOWING' : 'FOLLOW'}
//                         </button>
//                     </div>
//                     <div>
//                         <button onClick={() => handleApplyClick(item.id)}>
//                             {applicationStatus[item.id] ? 'APPLIED' : 'SEE MORE'}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         })}
//     </main>
// </div> */
}
