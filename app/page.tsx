import Image from "next/image";
import Hero from "./pages/homepage/Hero";
import About from "./pages/homepage/About";
import VisionMission from "./pages/homepage/VisionMission";
import WhatWeDo from "./pages/homepage/WhatWeDo";
import OurFocusGenres from "./pages/homepage/OurFocusGenres";
import WhySHGR from "./pages/homepage/WhySHGR";
import OurProcess from "./pages/homepage/OurProcess";
import Projects from "./pages/homepage/Projects";
import Collaborate from "./pages/homepage/Collaborate";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <VisionMission/>
    <WhatWeDo/>
    <OurFocusGenres/>
    <WhySHGR/>
    <OurProcess/>
    <Projects/>
    <Collaborate/>
    </>
  );
}
