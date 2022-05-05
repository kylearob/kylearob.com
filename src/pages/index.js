import { Container } from 'postcss'
import React from 'react'
import { Link } from 'gatsby'
import { DesktopComputerIcon, DocumentTextIcon } from '@heroicons/react/outline'
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from '../components/Layout'
import Tabs from '../components/sections/Tabs'

const features = [
    {
        title: "Feature Number 1.",
        icon: DesktopComputerIcon,
        feat: true,
    },
    {
        title: "Feature Number 2.",
        icon: DesktopComputerIcon,
    },
    {
        title: "Feature Number 3.",
        icon: DesktopComputerIcon,
    },
    {
        title: "Feature Number 4.",
        icon: DesktopComputerIcon,
    },
]


const Index = () => {

    return (
        <Layout>
            {/* one  */}
            <div className="dark:bg-gray-700 bg-gray-100">
                <div className="py-16 container mx-auto px-8 lg:px-24 xl:px-48">
                    <div className="grid lg:grid-cols-4">
                        <div className="col-span-3">
                            <h1 className="text-7xl sm:text-9xl font-black dark:text-gray-100 text-gray-700 mb-2">Kyle <br />Roberts<span className="text-emerald-400">.</span></h1>
                        </div>
                        <div className="">
                            <div className="border-b-[12px] border-emerald-400 w-1/4 mb-6 mt-8 lg:mt-0"></div>
                            <h1 className="text-2xl font-medium dark:text-gray-100 text-gray-500 mb-3">Freelance web development.</h1>
                            <p className="text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem atque quidem qui asperiores porro eveniet nisi velit tempore neque vel.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* two  */}
            <div className="bg-gray-800">
                <div className="pt-24 pb-48 lg:pb-56 container mx-auto px-8 lg:px-24 xl:px-48">
                    <h1 className="text-2xl font-medium text-gray-100 mb-3">Lorem ipsum dolor sit amet.</h1>
                    <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi minus omnis doloremque! Quo harum hic nisi est aliquid itaque nemo at, esse cum id aperiam suscipit consectetur libero iure placeat assumenda repudiandae aliquam odio obcaecati dignissimos iste quisquam! Fuga magnam beatae molestias at aspernatur perferendis delectus eaque labore ut, perspiciatis vel, maiores rem nostrum ratione cupiditate quos amet quae atque.</p>
                </div>
            </div>
            {/* <div className="grid grid-cols-3 gap-4 -mt-24 lg:-mt-36 xl:-mt-48 container mx-auto px-8 lg:px-24 xl:px-48"> */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 relative -translate-y-1/2 container mx-auto px-8 lg:px-24 xl:px-48">
                {features.map((feature) => (

                    <div className={"md:aspect-square shadow-lg border-gray-900/10 border p-8 flex  flex-col justify-center " + (feature.feat ? 'bg-emerald-400' : 'bg-gray-700')}>
                        <div className="basis-1/2"></div>
                        <div className="flex space-x-4 justify-center ">
                            {/* <feature.icon className='text-gray-100 h-8 w-8 flex-grow' /> */}
                            <h1 className="text-gray-100 font-medium text-xl lg:text-2xl">{feature.title}</h1>
                        </div>
                    </div>
                ))}

            </div>
            <div className="dark:bg-gray-700 bg-gray-100">
                <div className="container mx-auto px-8 lg:px-24 xl:px-48">
                    <div className="grid grid-cols-2 mb-8">
                        <div className="px-2">
                            <h1 className="text-2xl font-medium dark:text-gray-100 text-gray-500 mb-24">Featured Work.</h1>
                            <img className='mb-12' src="https://picsum.photos/400/400" />
                        </div>
                        <div className="px-2">
                            <img className='mb-4' src="https://picsum.photos/400/400" />
                            <img className='mb-4' src="https://picsum.photos/400/400" />

                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Index