import React from 'react'
import logo from '../images/LOGO-WHITE-NAV.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-950 to-black">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
                <a href="https://obourcsclub.org" className="flex items-center">
                    <img src={logo} className="h-16 me-3" alt="FlowBite Logo" />
                </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="https://www.facebook.com/ObourPC/" target='_blank' className="hover:underline">Facebook</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/@ObourComputerScienceClub" target='_blank' className="hover:underline">Youtube</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h2>
                    <ul className="text-gray-500 dark:text-gray-400 font-medium">
                        <li className="mb-4">
                            <a href="mailto:obourcomputerscienceclub@gmail.com" className="hover:underline">Email</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://obourcsclub.org/" className="hover:underline">Obour Computer Science Club</a> - All Rights Reserved.</span>
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">This Website Was Made With Love By: <a href="mailto:omar.2123040@stemobour.moe.edu.eg" className="hover:underline">Omar Beshir</a></span>
        </div>
    </div>
</footer>

  )
}
