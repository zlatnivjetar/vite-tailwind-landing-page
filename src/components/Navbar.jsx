import { useState, useEffect } from "react"
import { logo } from "../assets"
import Button from "./Button"

const Navbar = () => {
  // Hamburger menu logic
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen((prev) => !prev)

  useEffect(() => {
    document.querySelector("#menu-btn").classList.toggle("open")
    document.querySelector("#menu").classList.toggle("flex")
    document.querySelector("#menu").classList.toggle("hidden")
    return () => {
      null
    }
  }, [open])

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src={logo} alt="logo" className="h-6" />
        </div>
        <div className="md:flex hidden space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About Us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Carrers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
        </div>
        <Button text="Get Started" display="hidden md:block" />
        <button id="menu-btn" className="open block hamburger md:hidden outline-none" onClick={toggleMenu}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div className="md:hidden">
        <div
          id="menu"
          className="absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Carrers</a>
          <a href="#">Community</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
