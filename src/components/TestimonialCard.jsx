import React from "react"

const TestimonialCard = ({ id, avatar, name, message }) => {
  return (
    <div className="flex flex-col items-center max-w-sm space-y-4 p-4 w-full md:w-1/3 testimonial-one">
      <img
        src={avatar}
        alt={`client-${id}`}
        className="object-contain w-[80px] h-[80px] border-[1px] bg-brightRed border-[hsl(12,88%,59%)] rounded-full"
      />
      <h5 className="text-xl font-bold">{name}</h5>
      <p className="text-darkGrayishBlue text-sm">"{message}"</p>
    </div>
  )
}

export default TestimonialCard
