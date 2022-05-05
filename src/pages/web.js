import React from 'react'
import Layout from '../components/Layout'
import SimpleNav from '../components/navigation/SimpleNav'
import Features from '../components/sections/Features'
import { Fade } from 'react-reveal'
import { ArrowUpIcon, ClipboardCheckIcon, MailIcon } from '@heroicons/react/outline'
import { Link } from 'gatsby'

const web = () => {
    return (
        <Layout>
            <SimpleNav />
            <div className="-mt-12 px-12 lg:px-24 bg-amber-50 text-zinc-800" >

                <div className="hidden lg:flex fixed top-0 left-0 mt-48 ml-4 text-amber-50 flex-col">
                    <div className="bg-black/50 w-12 rounded-t-full">
                        <a className='' href="#"><ArrowUpIcon className='h-6 w-6 mx-auto mt-4 mb-2 ' /></a>
                    </div>
                    <div className="bg-black/50 w-12">
                        <ClipboardCheckIcon className='h-6 w-6 mx-auto my-2' />
                    </div>
                    <div className="bg-black/50 w-12 rounded-b-full">
                        <a className='' href="#"><MailIcon className='h-6 w-6 mx-auto mt-2 mb-4 ' /></a>
                    </div>
                </div>
                {/* <div className="container mx-auto flex pt-48">
                    <div className="">
                        <h1 className=" whitespace-nowrap p-1 text-7xl align-middle z-20 bg-black text-white">Bring your <span className='font-[libre-baskerville] font-light tracking-tight text-8xl italic mx-2'>design</span> to life.</h1>
                        <p className="pt-12 text-gray-600 text-xl font-thin w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla nemo assumenda sed, illo non corporis suscipit hic odit aut incidunt dolores in reiciendis culpa aliquam, sunt perspiciatis itaque voluptatem aperiam nobis! Iste labore eaque fugit saepe voluptatum animi ut iure, modi vitae doloribus aut ipsam, et repellat. Sed, molestiae veniam!</p>
                    </div>
                    <div className="">
                        <img className='p-4 shadow-around' src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGdyYXBoaWMlMjBkZXNpZ258ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60" />
                    </div>f
                </div> */}

                <div className="container mx-auto pt-24 mb-24">
                    <div className="grid grid-cols-12">
                        <Fade left>
                            <div className="col-span-3 col-start-1 bg-blue-500 h-48 -mb-12 z-10 bg-cover"></div>
                        </Fade>
                        <div className="text-center col-span-9 col-start-2 z-20 bg-red-500/50">
                            <h1 className="text-7xl sm:text-7xl xl:text-9xl">Bring your <span className='text-amber-50 font-[libre-baskerville] font-light tracking-tight italic mx-2'>design</span> to life.</h1>
                        </div>
                        <Fade right>
                            <div className="col-span-4 col-end-13 bg-green-500 h-72 -mt-24 z-10" ></div>
                        </Fade>
                    </div>
                </div>

                <Features />
                <div className="h-72 py-72"></div>
            </div>
            {/* <div className="container mx-auto flex space-x-4 my-24">
                <input type="text" placeholder='Email Address' className='py-2 w-48 pl-2 border-b-2 border-zinc-800' />
                <input type="text" placeholder='Field 2' className='py-2 w-48 pl-2 border-b-2 border-zinc-800' />
            </div> */}
        </Layout>
    )
}

export default web