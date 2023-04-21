import React from "react";
import GTJ from "../image/gtj.svg";
import search from "../image/search.png";
import apllication from "../image/apllication.png";
import following from "../image/following.png";
import profile from "../image/profile.png";
import logout from "../image/logout.png";
import Line from "../image/vertical-line.png";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/contexts/authentication";
import { useRouter } from "next/router";


const SideBarProfessional = () => {
    return (
        <div className="m-0 p-0 w-[240px] bg-white-tertiary  h-screen overflow-auto max-[700px]:w-screen max-[700px]:h-auto max-[700px]:relative" id="sidebar">
            <Link href="/" className="max-[700px]:flex max-[700px]:justify-center">
                <Image src={GTJ} className="mb-4 max-[700px]:pl-[8px] max-[700px]:pt-[16px] pl-[16px] pt-[32px] w-[160px] cursor-pointer" />
            </Link>
            <div className="box-all">
                <div className="box-1 max-[700px]:h-auto h-[82vh]">
                    <Link href="/" className="max-[700px]:flex max-[700px]:justify-center">
                        <div className="hover:bg-white-secondary active:bg-white-secondary max-[700px]:p-[6px] p-[12px] flex flex-row flex-warp gap-[10px]" id="sidebar-menu">

                            <Image src={search} alt="Job Postings" className="" />
                            <p id="body1">Find that job</p>
                        </div>
                    </Link>

                    <Link href="/" className="max-[700px]:flex max-[700px]:justify-center">
                        <div className="hover:bg-white-secondary active:bg-white-secondary max-[700px]:p-[6px] p-[12px] flex flex-row flex-warp gap-[10px]" id="sidebar-menu">
                            <Image src={application} alt="Create New Job" className="" />
                            <p id="body1">Your applications</p>
                        </div>
                    </Link>

                    <Link href="/" className="max-[700px]:flex max-[700px]:justify-center">
                        <div className="hover:bg-white-secondary active:bg-white-secondary max-[700px]:p-[6px] p-[12px] flex flex-row flex-warp gap-[10px]" id="sidebar-menu">
                            <Image src={following} alt="Create New Job" className="" />
                            <p id="body1">Following</p>
                        </div>
                    </Link>

                    <Link href="/" className="max-[700px]:flex max-[700px]:justify-center">
                        <div className="hover:bg-white-secondary active:bg-white-secondary max-[700px]:p-[6px] p-[12px] flex flex-row flex-warp gap-[10px]" id="sidebar-menu">
                            <Image src={profile} alt="Profile" className="" />
                            <p id="body1">Profile</p>
                        </div>
                    </Link>

                    <Link href="/" className="max-[700px]:flex max-[700px]:justify-center">
                        <div className="hover:bg-white-secondary active:bg-white-secondary max-[700px]:p-[6px] p-[12px] flex flex-row flex-warp gap-[10px]" id="sidebar-menu">
                            <Image src={logout} alt="Log out" className="" />
                            <p id="body1">Log out</p>
                        </div>
                    </Link>
                </div>
                <div className="box-2 pl-[16px] max-[700px]:text-center">
                    <p>© 202X - Get That Job</p>
                </div>
            </div>
        </div>
    );
}
export default SideBarRecruiter;
