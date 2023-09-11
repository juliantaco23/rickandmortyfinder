"use client";

import Image from "next/image"
import  CustomButtom  from "./CustomButtom"
const Hero = () => {

  const handleScroll = () => {

    }
  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Lorem ipsum 
            </h1>

            <p className="hero__subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi animi quo nam, harum amet nulla dolore dolores! Expedita fugiat blanditiis cumque obcaecati ea eius praesentium repudiandae! Corporis quae perferendis velit!
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