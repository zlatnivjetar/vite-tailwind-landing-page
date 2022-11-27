import React from "react"
import { illustration } from "../assets"
import Button from "./Button"

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex md:flex-row flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0">
        <div className="flex flex-col mb-32 space-y-12 md:w-[50%]">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
            Bring everyone together to build better products
          </h1>
          <p className="w-[80%] self-center text-center text-darkGrayishBlue md:self-start md:max-w-[384px] md:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks while keeping larger team goals in view.
          </p>
          <div className="flex justify-center md:justify-start">
            <Button text="Get Started" />
          </div>
        </div>

        <div className="md:w-[50%]">
          <img src={illustration} alt="illustration" />
        </div>
      </div>
    </section>
  )
}

export default Hero
