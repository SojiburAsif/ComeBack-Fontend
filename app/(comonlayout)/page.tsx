
import About from "@/components/Static/About";
import Contact from "@/components/Static/Contact";
import Gallery from "@/components/Static/Gallery";
import { HeroSection } from "@/components/Static/Hero";
import HomeList from "@/components/Static/List";

import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <HeroSection />
     <HomeList/>
     <Gallery/> 
     <About/>
     <Contact/>
    </div>
  );
}
