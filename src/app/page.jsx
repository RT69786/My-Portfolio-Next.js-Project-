import Header from "./components/Header/Header";
import AboutUS from "./components/AboutUS/AboutUS";
import Main02 from "./components/Main02/Main02";
import Main03 from "./components/Main03/Main03";
import AboutMe from "./components/AboutMe/AboutMe";
import FeaturedWorks from "./components/FeaturedWorks/FeaturedWorks";
// import { CometCard } from "./components/ui/comet-card";
// import { HoverBorderGradient } from "./components/ui/hover-border-gradient";

export default function Home() {
  return (
    <>
      <Header />
      <AboutUS/>
      {/* <Main01 /> */}
      <Main02 />
      <Main03 />
      <AboutMe />
      <FeaturedWorks />
{/* <HoverBorderGradient style={{ margin: "50px", display: "flex", justifyContent: "center"}} >

  <i className="ri-arrow-right-line"></i>
  <h2>Contact Me</h2>
</HoverBorderGradient> */}
      {/* 👇 Just for testing  */}

      {/* <div
        style={{ margin: "50px", display: "flex", justifyContent: "center" }}
      >
        <CometCard className="p-10  text-black rounded-2xl text-center">
           <img src="/pics/pic7.png" alt="pic7" />
           <h2>About Me</h2>
           <p>I am Ashar the great warrior</p>
          
        </CometCard>
      </div> */}
    </>
  );
}
