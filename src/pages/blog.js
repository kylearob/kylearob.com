import React from 'react'
import { Link } from 'gatsby'
import { DesktopComputerIcon, DocumentTextIcon } from '@heroicons/react/outline'
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from '../components/Layout'
import Tabs from '../components/sections/Tabs'


const Blog = () => {

    return (
        <Layout>
            <div className="bg-gray-700">
                <div className="py-16 container mx-auto">
                    <div className="grid grid-cols-2">
                        <div className="">
                            <h1 className="text-9xl font-black text-gray-100 mb-2">Kyle's <br />Blog<span className="text-emerald-400">.</span></h1>
                        </div>
                        <div className="">
                            <div className="text-sm text-gray-400 uppercase mb-2">
                                Hello
                            </div>
                            <h1 className="text-2xl text-gray-100 mb-3">Lorem ipsum dolor sit amet.</h1>
                            <p className="text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem atque quidem qui asperiores porro eveniet nisi velit tempore neque vel. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut quisquam iure aut ab et sapiente aperiam dolorem earum iste maiores!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-80 bg-gray-800"></div>
        </Layout >
    )
}

export default Blog