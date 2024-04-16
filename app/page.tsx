"use client";

import Main from "@/components/template/main";
import SideNav from "@/components/template/sidenav";
import TopNav from "@/components/template/topnav";
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <TopNav/>
      <SideNav />
      <Main />
    </div>
  );
}
