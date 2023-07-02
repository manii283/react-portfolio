import React, {useEffect} from "react";
import HeroSection from "./Components/HeroSection";
import { AppContext, useGlobalContext } from "./context";

const Home = () => {
  // const data = {
  //   name: 'Manisha Nayak',
  //   image: './images/hero,svg'
  // }

  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage(), []);

  return (
    <div>
      <HeroSection/>
    </div>
  );
};

export default Home;
