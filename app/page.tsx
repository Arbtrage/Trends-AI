import Main from "@/components/template/main";
import SideNav from "@/components/template/sidenav";
import TopNav from "@/components/template/topnav";


export async function generateMetadata() {
  return {
    title: "Trend",
    description: "A visual tool for analysing stocks and trends",
    icons: {
      icon: "/trend.jpg",
    },
  };
}
export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      <TopNav/>
      <SideNav />
      <Main />
    </div>
  );
}
