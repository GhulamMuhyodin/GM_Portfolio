import React from "react";
function Footer() {
  return (
    <footer className="w-full  lg:w-full xl:w-full 2xl:w-full mx-auto py-2 fixed bottom-0  bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Designed and Coded by{" "}
        <a
          className="font-medium"
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
        >
          GM Developer
        </a>{" "}
        {/* with
        <span className="text-gradient font-medium"> Love</span> &
        <span className="text-gradient font-medium"> Coffee</span> */}
      </p>
    </footer>
  );
}
export default Footer;
