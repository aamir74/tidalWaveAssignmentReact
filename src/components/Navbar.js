import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-auto bg-white text-black relative shadow-sm font-mono '>
            <div className='my-10 mx-10 sm:mx-20 px-4 py-3.5 border-4 border-black border-solid text-center font-bold transform hover:-rotate-90 transition-all duration-500 easi-in-out'><h1>AA</h1></div>
            <div className="px-4 cursor-pointer md:hidden">
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </div>
            <div className="pr-8 md:block hidden font-bold ">
                <a className="p-4 cursor-pointer">Home</a>
                <a className="p-4 cursor-pointer">About</a>
                <a className="p-4 cursor-pointer">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
