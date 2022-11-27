import React from "react"
import { clientData } from "."
import Button from "./Button"
import TestimonialCard from "./TestimonialCard"

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="mt-24 mx-auto container">
        <div>
          <h2 className="text-4xl font-bold text-center">What do our clients say?</h2>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center md:items-baseline space-y-4 md:space-y-0 md:flex-row text-center md:space-x-8">
          {clientData.map((client) => (
            <TestimonialCard key={client.id} avatar={client.avatar} name={client.name} message={client.message} />
          ))}
        </div>
        <div className="flex justify-center my-14">
          <Button text="Get Started" />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
