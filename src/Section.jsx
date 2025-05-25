import React from "react";
import { homePagePhoto, SocialList } from "./constants";
import Button from "./Button";

export default function Section() {
  return (
    <div className="relative -mt-6 bg-[#CDEA68] rounded-2xl ">
      <div className="">
        <div className="p-5 max-w-[1300px]">
        <h2 className="text-3xl font-normal leading-8  py-12 md:py-20  md:text-[2.5rem] md:leading-10 lg:text-[3.2rem] lg:leading-13  NeueMontreal">
          <p>
            Ochi is a strategic presentation agency for forward-thinking
            businesses that need to{" "}
          </p>
          <u>raise fund</u>,<u> sell prod&shy;ucts</u>,
          <u> ex&shy;plain com&shy;plex ideas</u>, and
          <u> hire great peo&shy;ple</u>.
        </h2>
      </div>
      <div className="md:mb-24 ">
        <hr className="opacity-30" />
        <div className="grid md:grid-cols-3 p-5 md:p-5 md:py-5  gap-5 NeueMontreal w-[80%] md:w-full">
          <div>
            <p>What you can expect:</p>
          </div>
          <div className="grid gap-5 max-w-[500px] ">
            <div>
              <p className="">
                We partner with the companies and startups who make the world go
                round — they drive the net-zero economy, revolutionize crypto
                treasury management, build photonic chips, and open
                Michelin-starred restaurants.
              </p>
            </div>
            <div>
              <p>
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </p>
            </div>
          </div>
          <div className="grid gap-5 mb-12 md:mb-0 md:justify-self-end-safe md:items-end ">
            <p className="md:-mb-[5rem] lg:-mb-[3rem] xl:-mb-0 ">S:</p>
            <ul className="">
              {SocialList.map((item, index) => (
                <li key={index}>
                  <u>{item}</u>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="">
        <hr className="opacity-30" />
        <div className="grid gap-5 md:grid-cols-2 p-5 md:-mt-5">
          <div className="">
            <p className="text-3xl md:text-[2.6rem] xl:text-[3.5rem]">Our approch :</p>
            <Button className={`mt-6 xl:w-[12rem] xl:h-[4rem]`}>Read More</Button>
          </div>
          <div className="rounded-2xl overflow-hidden mt-6  md:mt-3 md:mb-6">
            <img src={homePagePhoto} alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
