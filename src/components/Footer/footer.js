import React from "react";
import { BsFacebook, BsPinterest } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";

function footer() {
  return (
    <div className="mt-8 hidden lg:inline">
      <div className="bg-bms-400 text-text-50">
        <div className="py-8 px-6">
          <div className="w-full">
            <h4 className="text-sm font-semibold">Privacy Note</h4>
          </div>
          <div className="w-full text-xs py-2">
            By using www.bookmyshow.com(our website), you are fully accepting the Privacy
            Policy available at{" "}
            <a href="/privacy" className="text-bms-50">
              https://bookmyshow.com/privacy
            </a>{" "}
            governing your access to Bookmyshow and provision of services by Bookmyshow to
            you. If you do not accept terms mentioned in the
            <a href="/privacy" className="text-bms-50">
              {" "}
              Privacy Policy
            </a>
            , you must not share any of your personal information and immediately exit
            Bookmyshow.
          </div>
        </div>
      </div>
      <div className="bg-bms-500 text-white">
        <div className="p-4 flex justify-between items-center">
          <div className="flex justify-evenly items-center text-sm w-9/12">
            <img src="hut.svg" alt="hut" />
            <p className="font-semibold pl-2">List your Show</p>
            <p className="">
              Got a show, event, activity or a great experience? Partner with us & get
              listed on BookMyShow
            </p>
          </div>
          <button className="bg-bms-50 rounded-sm cursor-pointer px-4 py-2 ">
            {" "}
            <a href="/list-your-show" className="text-sm">
              Contact today!
            </a>
          </button>
        </div>
      </div>
      <div className="bg-bms-600 p-6 text-text-100">
        <div className="flex justify-around items-center">
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1 -1 102 102"
              className="w-12 h-12 fill-text-100 hover:fill-white"
            >
              <path d="M68.8 29.4c0-10.4-8.4-18.8-18.8-18.8S31.2 19 31.2 29.4 39.6 48.2 50 48.2s18.8-8.4 18.8-18.8zm-35.8 0c0-9.3 7.6-17 17-17 9.3 0 17 7.6 17 17 0 9.3-7.6 17-17 17-9.3 0-17-7.6-17-17z"></path>
              <path d="M24 30.3c.5 0 .9-.4.9-.9C24.9 15.6 36.2 4.3 50 4.3s25.1 11.3 25.1 25.1c0 13.1-10.5 28.3-24.2 29v-3.9c0-.5-.4-.9-.9-.9s-.9.4-.9.9v8.6c0 .5.4.9.9.9s.9-.4.9-.9v-2.9c14.7-.7 26-16.8 26-30.8C76.9 14.6 64.8 2.5 50 2.5S23.1 14.6 23.1 29.4c0 .5.4.9.9.9z"></path>
              <path d="M68.1 63c-.6-.2-1.2-.3-1.9-.3-.9 0-2.3.7-4.9 2.1-3.2 1.7-7.7 4-10.6 4-3.2 0-8-2.3-11.5-4-2.8-1.3-4.3-2-5.3-2-.7 0-1.3.1-1.9.3C16.7 68.2 11.2 86 11.2 96.7c0 .5.4.9.9.9H88c.5 0 .9-.4.9-.9 0-10.8-5.6-28.6-20.8-33.7zM13 95.7c.3-12.1 7.2-26.8 19.6-30.9.4-.1.8-.2 1.3-.2.6 0 2.7 1 4.5 1.9 3.9 1.9 8.7 4.2 12.3 4.2 3.3 0 7.8-2.3 11.4-4.2 1.6-.8 3.6-1.9 4.1-1.9s.9.1 1.3.2C79.9 68.9 86.7 83.6 87 95.7H13zm3.6-55.3c.5 0 .9-.4.9-.9V26.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v13.2c0 .5.4.9.9.9zm66.8 0c.5 0 .9-.4.9-.9V26.3c0-.5-.4-.9-.9-.9s-.9.4-.9.9v13.2c-.1.5.4.9.9.9z"></path>
            </svg>
            <p className="text-xs font-semibold hover:text-white pt-4">
              24/7 CUSTOMER CARE
            </p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1 -1 102 102"
              className="w-12 h-12 fill-text-100 hover:fill-white"
            >
              <path d="M92.1 69l-5.6-13.9a1 1 0 0 0-1.1-.5c-1.9.8-4.1-.2-4.8-2.1-.4-.9-.4-1.9 0-2.8.4-.9 1.1-1.6 2-2 .2-.1.4-.2.5-.4s.1-.4 0-.6l-5.6-13.9a1 1 0 0 0-1.1-.5L61 38.5l9-20.9c.2-.4 0-.9-.4-1.1L57 11.1c-.4-.2-.9 0-1.1.4a3.3 3.3 0 0 1-4.3 1.8c-.8-.3-1.4-1-1.8-1.8-.3-.8-.3-1.7 0-2.5.1-.2.1-.4 0-.6-.1-.2-.2-.4-.4-.5L36.8 2.6c-.4-.2-.9 0-1.1.4L12.3 58.2l-3.9 1.5c-.2.2-.4.3-.4.5-.1.2-.1.4 0 .6l5.6 13.9c.2.4.7.6 1.1.5 1.9-.7 4.1.2 4.8 2 .4.9.4 1.9 0 2.8s-1.1 1.6-2 2c-.2.1-.4.2-.5.4-.1.2-.1.4 0 .6l5.4 14c.1.2.2.4.4.5.1 0 .2.1.3.1.1 0 .2 0 .3-.1l68.1-27.3c.5-.2.7-.7.6-1.2zM36.9 4.4L48 9.1c-.2 1-.2 2 .2 3 .5 1.2 1.4 2.2 2.7 2.7 2.3 1 4.8.1 6.1-1.9l11.1 4.7-9.3 21.8-4.7 1.9L59 30.2l2.5-5.8c.1-.2.1-.4 0-.6s-.2-.4-.4-.5L38 13.5c-.2-.1-.4-.1-.6 0-.2.1-.4.2-.5.4L19.1 55.5l-4.7 1.9 22.5-53zm-1.4 16.7l.8.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-.8-.3 1.8-4.3 21.6 9.2-1.8 4.3-.8-.4c-.4-.2-.9 0-1.1.4-.2.4 0 .9.4 1.1l.8.3-5.1 12-30.7 12.4 14.2-33.5zM23.7 95.6l-5-12.4c1-.6 1.7-1.4 2.2-2.5.6-1.3.6-2.8 0-4.1-.8-2-2.8-3.4-5-3.4-.4 0-.8 0-1.2.1L9.8 61l66.5-26.7 5 12.4c-1 .6-1.7 1.4-2.2 2.5a4.9 4.9 0 0 0 0 4.1c.8 2 2.8 3.4 5 3.4.4 0 .8 0 1.2-.1l5 12.4-66.6 26.6z"></path>
              <path d="M70 42.1c-.1-.2-.2-.4-.4-.5-.2-.1-.4-.1-.6 0L20.2 61.2a1 1 0 0 0-.5 1.1L30 87.8c.1.2.2.4.4.5.1 0 .2.1.3.1.1 0 .2 0 .3-.1l42.3-17 6.4-2.6c.4-.2.6-.7.5-1.1L70 42.1zm3.5 27.3l-.3-.8a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l.4.8-34.2 13.7-.3-.7a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l.3.8-5.1 2-9.6-23.9 5.1-2 .3.8c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-.3-.8 34.1-13.7.3.8c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-.3-.8 4.9-2 9.6 23.9-4.9 2.1z"></path>
              <path d="M30.6 65.7c-.2-.4-.7-.6-1.1-.5s-.6.7-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm3.5 8.6a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm32.2-22.9a1 1 0 0 0-1.1-.5 1 1 0 0 0-.5 1.1l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1l-1.4-3.3zm1.9 9.3l1.4 3.4c.1.3.4.5.8.5.1 0 .2 0 .3-.1.4-.2.6-.7.5-1.1L69.7 60a1 1 0 0 0-1.1-.5c-.4.2-.6.7-.4 1.2zm-19.5-34l3.1 1.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-3.1-1.3c-.4-.2-.9 0-1.1.4-.3.4-.1.9.4 1.1zm-7.8-3.3l3.1 1.3c.1 0 .2.1.3.1.3 0 .6-.2.8-.5.2-.4 0-.9-.4-1.1l-3.1-1.3c-.4-.2-.9 0-1.1.4-.2.4 0 .9.4 1.1zm13.4 41.4c-.5 0-.8.4-.8.8 0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4c0-2.3 1.9-4.2 4.2-4.3l-1.6 2.3c-.3.4-.2.9.2 1.2.1.1.3.1.5.1.3 0 .5-.1.7-.4l2.6-3.7c.3-.4.2-.9-.2-1.1L47.5 57c-.4-.3-.9-.2-1.2.2s-.2.9.2 1.2l1.9 1.4c-3 .3-5.4 2.9-5.4 5.9 0 3.3 2.7 6 6 6s6-2.7 6-6c.1-.5-.3-.9-.7-.9z"></path>
            </svg>
            <p className="text-xs font-semibold hover:text-white pt-4">
              RESEND BOOKING CONFIRMATION
            </p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1 -1 102 102"
              className="w-12 h-12 fill-text-100 hover:fill-white"
            >
              <g id="elnewsletter">
                <path
                  className="elst0"
                  d="M97.5 90.3V33.6c0-.5-.4-1-1-1H82.9V9.8c0-.5-.4-1-1-1H18.1a1 1 0 0 0-1 1v22.8H3.5a1 1 0 0 0-1 1v56.9c0 .1.1.1.1.2v.1c0 .1.1.1.2.1.1.1.2.1.2.1.1 0 .1 0 .2.1h93.4c.1 0 .3 0 .4-.1 0 0 .1 0 .1-.1.1-.1.2-.1.2-.2v-.1c0-.1.1-.1.1-.2.1 0 .1 0 .1-.1zm-1.9-55.7v53.6L63.9 64.1l18.6-17.7 7.7-7.4c.3-.3.4-.7.2-1.1-.1-.4-.5-.6-.9-.6h-6.8v-2.7h12.9zM50.2 56.1l43.4 33.1H6.4l43.8-33.1zm32.7-16.8h4.4l-4.4 4.1v-4.1zM19.1 10.8h61.8v34.5L62.4 62.9l-11.6-8.8c-.3-.3-.8-.3-1.2 0L37.8 63 19.1 45.3V10.8zm-2 32.6l-4.4-4.1h4.4v4.1zm0-8.8v2.7h-6.8c-.4 0-.8.2-.9.6-.1.4-.1.8.2 1.1l26.5 25.2-31.8 24V34.6h12.8z"
                ></path>
                <path
                  className="elst0"
                  d="M28.9 22.5h42.7a1 1 0 0 0 0-2H28.9c-.5 0-1 .4-1 1s.4 1 1 1zm0 10h42.7a1 1 0 0 0 0-2H28.9a1 1 0 0 0 0 2zm0 9.9h42.7a1 1 0 0 0 0-2H28.9c-.5 0-1 .4-1 1s.4 1 1 1z"
                ></path>
              </g>
            </svg>
            <p className="text-xs font-semibold hover:text-white pt-4">
              RESEND BOOKING CONFIRMATION
            </p>
          </div>
        </div>
      </div>
      <div className="bg-bms-700 p-6 text-text-150">
        <div className="pt-4">
          <h5 className="text-text-50 font-semibold py-2 text-sm">MOVIES PLAYING NOW</h5>

          <div className="flex justify-between items-center text-[11px]">
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Bangarraju</span>
            </a>
            <a
              href="/movies/rowdy-boys/ET00311775"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1"> Rowdy Boys</span>
            </a>
            <a
              href="/movies/naai-sekar/ET00320969"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1"> Naai Sekar</span>
            </a>
            <a
              href="/movies/hero-2022/ET00312254"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1"> Hero (2022)</span>
            </a>
            <a
              href="/movies/nay-varan-bhat-loncha-kon-nay-koncha/ET00321184"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1"> Nay Varan Bhat Loncha Kon Nay Koncha</span>
            </a>
            <a
              href="/movies/pushpa-the-rise-part-01-tamil/ET00129539"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1"> Pushpa: The Rise - Part 01</span>
            </a>
            <a
              href="/movies/enna-solla-pogirai/ET00319201"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1"> Enna Solla Pogirai</span>
            </a>
            <a
              href="/movies/kombu-vatcha-singamda/ET00315136"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1"> Kombu Vatcha Singamda</span>
            </a>
            <a
              href="/movies/the-house-of-dead-horror-combo-7d/ET00021990"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1"> The House of Dead Horror</span>
            </a>
            <a href="/movies/the-kings-man-hindi/ET00319438" className=" mr-1">
              <span className="mr-1"> The King`s Man</span>
            </a>
          </div>
        </div>
        <div className="pt-4">
          <h5 className="text-text-50 font-semibold py-2 text-sm">UPCOMING MOVIES</h5>

          <div className="flex justify-start flex-wrap items-center text-[11px]">
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Thuramukham</span>
            </a>
            <a
              href="/movies/rowdy-boys/ET00311775"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1"> Pawankhind</span>
            </a>
            <a
              href="/movies/naai-sekar/ET00320969"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">The 355</span>
            </a>
            <a
              href="/movies/hero-2022/ET00312254"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Swastik Sanket</span>
            </a>
            <a
              href="/movies/nay-varan-bhat-loncha-kon-nay-koncha/ET00321184"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Hridayam</span>
            </a>
            <a
              href="/movies/pushpa-the-rise-part-01-tamil/ET00129539"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Varma (Veedu Teda)</span>
            </a>
            <a
              href="/movies/enna-solla-pogirai/ET00319201"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Marutha</span>
            </a>
            <a
              href="/movies/kombu-vatcha-singamda/ET00315136"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Veerame Vaagai Soodum</span>
            </a>
            <a
              href="/movies/the-house-of-dead-horror-combo-7d/ET00021990"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">DJ Tillu</span>
            </a>
            <a
              href="/movies/the-kings-man-hindi/ET00319438"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Thamezharasan</span>
            </a>
            <a
              href="/movies/the-kings-man-hindi/ET00319438"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Saamanyudu</span>
            </a>
            <a
              href="/movies/the-kings-man-hindi/ET00319438"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Kallan D`Souza</span>
            </a>
            <a
              href="/movies/the-kings-man-hindi/ET00319438"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Veyil</span>
            </a>
            <a
              href="/movies/the-kings-man-hindi/ET00319438"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Varchasva</span>
            </a>
            <a
              href="/movies/the-kings-man-hindi/ET00319438"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Morbius</span>
            </a>
            <a
              href="/movies/the-kings-man-hindi/ET00319438"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Ombatthane Dikku</span>
            </a>
            <a
              href="/movies/the-kings-man-hindi/ET00319438"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">DSJ - Deyyamtho Sahajeevanam</span>
            </a>
            <a href="/movies/the-kings-man-hindi/ET00319438" className="mb-2 mr-1">
              <span className="mr-1">Karnan Napolean Bhagat Singh</span>
            </a>
          </div>
        </div>
        <div className="pt-4">
          <h5 className="text-text-50 font-semibold py-2 text-sm">
            MOVIE UPDATES AND CELEBRITIES
          </h5>

          <div className="flex justify-start flex-wrap items-center text-[11px]">
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Upcoming Movies</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Now Showing</span>
            </a>
            <a href="/movies/bangarraju/ET00316733" className="mb-2 mr-1">
              <span className="mr-1">Movie Celebrities</span>
            </a>
          </div>
        </div>
        <div className="pt-4">
          <h5 className="text-text-50 font-semibold py-2 text-sm">COUNTRIES</h5>

          <div className="flex justify-start flex-wrap items-center text-[11px]">
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Indonesia</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Singapore</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">UAE</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Sri Lanka</span>
            </a>
            <a href="/movies/bangarraju/ET00316733" className="mb-2 mr-1">
              <span className="mr-1">West Indies</span>
            </a>
          </div>
        </div>
        <div className="pt-4">
          <h5 className="text-text-50 font-semibold py-2 text-sm">HELP</h5>

          <div className="flex justify-start flex-wrap items-center text-[11px]">
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">About Us</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Contact Us</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Current Openings</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Press Release</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Press Coverage</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Terms & Conditions</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Privacy Policy</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">FAQs</span>
            </a>

            <a href="/movies/bangarraju/ET00316733" className="mb-2 mr-1">
              <span className="mr-1">Sitemap</span>
            </a>
          </div>
        </div>
        <div className="pt-4">
          <h5 className="text-text-50 font-semibold py-2 text-sm">
            BOOKMYSHOW EXCLUSIVES
          </h5>

          <div className="flex justify-start flex-wrap items-center text-[11px]">
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Watch Guide</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Superstar</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">BookASmile</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Corporate Vouchers</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">Gift Cards</span>
            </a>
            <a
              href="/movies/bangarraju/ET00316733"
              className="border-r-[1px] border-r-text-150 mb-2 mr-1"
            >
              <span className="mr-1">List My Show</span>
            </a>
            <a href="/movies/bangarraju/ET00316733" className="mb-2 mr-1">
              <span className="mr-1">Stream</span>
            </a>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col">
            <div className="flex justify-between items-center my-10">
              <div className="h-[1px] w-5/12 bg-text-150 "></div>
              <div>
                <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />
              </div>
              <div className="h-[1px] w-5/12 bg-text-150 "></div>
            </div>
            <div className="flex justify-center items-center mb-6">
              <BsFacebook size={36} className="pr-2" />
              <AiFillTwitterCircle size={36} className="pr-2" />
              <AiFillInstagram size={36} className="pr-2" />
              <AiFillYoutube size={36} className="pr-2" />
              <BsPinterest size={36} className="pr-2" />
              <AiFillLinkedin size={36} className="pr-2" />
            </div>
            <div className="flex flex-col items-center justify-center text-[11px] py-8">
              <div>
                Copyright 2022 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
              </div>
              <div>
                The content and images used on this site are copyright protected and
                copyrights vests with the respective owners. The usage of the content and
                images on this website is intended to promote the works and no
              </div>
              <div>
                {" "}
                endorsement of the artist shall be implied. Unauthorized use is prohibited
                and punishable by law.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
