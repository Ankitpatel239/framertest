"use client"

import { useState } from "react";
import HeroSection from "./components/hero-section";
import StoriesSection from "./components/stories-section";
import FunMission from "./components/Fun-Mission";

export default function Home() {
  const [isImageSectionVisible, setIsImageSectionVisible] = useState(false);

  return (

    <div className="bg-zinc-950">

    <div>
      <HeroSection setIsImageSectionVisible={setIsImageSectionVisible} />
      <StoriesSection/>
      <FunMission/>
    </div>

  </div>
  );
}
