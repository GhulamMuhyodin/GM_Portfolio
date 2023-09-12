import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, title, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.1,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 3,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.7,
          opacity: 0,
          duration: 4,
          ease: "Power3.easeOut",
        },
        "<"
      )

      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main>
      <div className="container mx-auto max-width section md:flex justify-between items-center ">
        <div>
          <h1
            ref={h11}
            className="text-2xl text-dark-heading dark:text-slate-50 md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            Hi,👋<br></br>My Name is<br></br>
          </h1>
          <h1
            ref={h12}
            className="mt-4 text-3xl bg-clip-text bg-gradient text-transparent sm:text-4xl md:text-4xl xl:text-5xl xl:leading-tight font-bold"
          >
            {name}
          </h1>
          <h2
            ref={h13}
            className="mt-4 text-2xl bg-clip-text dark:text-slate-50	 text-transparent md:text-4xl xl:text-3xl xl:leading-tight font-bold"
          >
            {title}
          </h2>
          <h2
            ref={h13}
            className=" mt-4 text-lg text-dark-heading dark:text-slate-50	 md:text-lg xl:text-lg xl:leading-tight font-bold"
          >
            {tagline}
          </h2>
          {/* <h6 className="mt-4 whitespace-normal text-base text-dark-heading dark:text-light-heading md:text-base xl:text-base xl:leading-tight font-bold">
            {about}
          </h6> */}
        </div>
        <div className="mb-12 md:mb-10">
          <img
            // ref={myimageref}
            className=" md:w-full lg:w-full xl:w-full  md:ml-auto"
            src={img}
            alt="GM"
          />
        </div>
      </div>
      {/* <div className="items-center container mx-auto max-width section  ">
        <h6
          ref={h13}
          className=" whitespace-normal text-base text-dark-heading dark:text-light-heading md:text-base xl:text-base xl:leading-tight font-bold"
        >
          {about}
        </h6>
      </div> */}
    </main>
  );
}

export default Home;
