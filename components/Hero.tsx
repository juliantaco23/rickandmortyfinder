"use client";

import Image from "next/image"
import  CustomButtom  from "./CustomButtom"
const Hero = () => {

  const handleScroll = () => {

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title w-full">
                Rick and Morty
            </h1>

            <p className="hero__subtitle w-full">
              This is a site develop for: Julian Tamara as a technical test for Auco.ai in here you can explore diferent characters from the tv series rick and Morty, also you can find in the personal section a video of personal objectives and presentation
            </p>

            <CustomButtom 
                title="Explore Characters"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                handleClick = {handleScroll}
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
            </div>
        </div>
    </div>
  )
}

export default Hero