import React from "react"
import { bgDesktop } from "../assets"

const CTA = () => {
  return (
    <section id="CTA" className="bg-brightRed relative overflow-hidden">
      <div className="absolute w-[5000px] bottom-[-10%] md:bottom-[unset] left-[-60%] md:left-0 md:right-[-20%] md:w-[130%] lg:w-[105%]">
        <img src={bgDesktop} alt="background desktop" />
      </div>

      <div className="container flex flex-col md:flex-row justify-between items-center py-16 px-6 mx-auto space-y-12 md:space-y-0">
        <h2 className="max-w-xl text-5xl leading-[56px] font-bold text-center text-white md:text-left tracking-wide px-4">
          Simplify how your team works today.
        </h2>
        <a
          href="#"
          className="p-3 md:whitespace-nowrap baseline px-6 text-brightRed bg-white rounded-full baseline hover:bg-gray-900 hover:text-white"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}

export default CTA
