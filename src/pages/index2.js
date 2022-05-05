import { Container } from 'postcss'
import React from 'react'
import { Link } from 'gatsby'
import { DesktopComputerIcon, DocumentTextIcon } from '@heroicons/react/outline'
import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import Layout from '../components/Layout'
import Tabs from '../components/sections/Tabs'


const Index2 = () => {

    return (
        <Layout>
            <div className="bg-gray-50">
                <div className="h-screen container flex flex-col mx-auto items-center justify-center">
                    <h1 className="text-9xl font-black text-gray-700 mb-2">Kyle <br />Roberts</h1>
                    <div className="flex space-x-4">
                        <AniLink cover direction="right" bg="#374151" to="/web">
                            <div className="rounded-md shadow-around py-16 px-24 items-center text-center bg-white group hover:bg-blue-400 active:scale-95">
                                <DesktopComputerIcon className='mx-auto pb-1 h-12 w-12 text-gray-700 group-hover:text-blue-50' />
                                <p className="font-medium text-xl text-gray-600 group-hover:text-blue-50">Websites</p>
                            </div>
                        </AniLink>
                        <AniLink cover direction="left" bg="#374151" to="/blog">
                            <div className="rounded-md shadow-around py-16 px-24 items-center text-center bg-white group hover:bg-blue-400 active:scale-95">
                                <DocumentTextIcon className='mx-auto pb-1 h-12 w-12 text-gray-700 group-hover:text-blue-50' />
                                <p className="font-medium text-xl text-gray-600 group-hover:text-blue-50">Blog</p>
                            </div>
                        </AniLink>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default Index2