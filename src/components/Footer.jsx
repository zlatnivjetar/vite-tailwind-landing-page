import { facebook, instagram, logoWhite, pinterest, twitter, youtube } from "../assets"

const Footer = () => {
  return (
    <footer id="footer" className="bg-veryDarkBlue">
      <div className="container flex flex-col-reverse md:flex-row px-3 justify-between py-12 pb-6 mx-auto space-y-6 md:space-y-0">
        <div className="flex flex-col-reverse md:flex-col gap-8 md:gap-20 ">
          <p className="text-white text-center md:text-left block md:hidden">Copyright © 2022, All Rights Reserved</p>
          <div className="flex items-center justify-center">
            <img src={logoWhite} alt="logo" className="h-8" />
          </div>
          <div className="flex justify-center gap-4">
            <a href="#">
              <img src={facebook} alt="facebook-logo" className="h-8" />
            </a>
            <a href="#">
              <img src={instagram} alt="instagram-logo" className="h-8" />
            </a>
            <a href="#">
              <img src={youtube} alt="youtube-logo" className="h-8" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter-logo" className="h-8" />
            </a>
            <a href="#">
              <img src={pinterest} alt="pinterest-logo" className="h-8" />
            </a>
          </div>
        </div>

        <div className="flex flex-row pt-4 pb-8 px-4 justify-center lg:justify-between text-white space-x-16 md:space-x-8 lg:space-x-24 ">
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:text-brightRed">
              Home
            </a>
            <a href="#" className="hover:text-brightRed">
              Pricing
            </a>
            <a href="#" className="hover:text-brightRed">
              Product
            </a>
            <a href="#" className="hover:text-brightRed">
              About
            </a>
          </div>
          <div className="flex flex-col space-y-3">
            <a href="#" className="hover:text-brightRed">
              Affiliate
            </a>
            <a href="#" className="hover:text-brightRed">
              Careers
            </a>
            <a href="#" className="hover:text-brightRed">
              Community
            </a>
            <a href="#" className="hover:text-brightRed">
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-around space-y-8 md:space-y-0">
          <div className="space-x-4 flex">
            <input
              type="text"
              placeholder="Subscribe for news"
              className="w-[80%] h-10 lg:w-full px-4 rounded-full outline-none"
            />
            <a
              href="#"
              className={`h-[40px] px-6 py-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight`}
            >
              Go
            </a>
          </div>
          <p className="text-white text-center md:text-left hidden md:block">Copyright © 2022, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
