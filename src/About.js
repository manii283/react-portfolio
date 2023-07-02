import React, { useEffect } from "react";
import HeroSection from "./Components/HeroSection";
import { useGlobalContext } from "./context";

const About = () => {
  // const data = {
  //   name: 'Manisha',
  //   image: './images/about1.svg'
  // }

  const { updateAboutPage } = useGlobalContext();

  useEffect(() => updateAboutPage(), []);
  return (
    <div>
      <HeroSection />
    </div>
  );
};

export default About;
