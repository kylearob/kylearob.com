import { Link } from 'gatsby'
import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { MenuIcon } from '@heroicons/react/outline'
import { AnnotationIcon } from '@heroicons/react/solid'

const SimpleNav = () => {
    return (
        <div className='w-full bg-gray-100 dark:bg-gray-700 py-12'>
            <div className="container mx-auto px-8 lg:px-24 xl:px-48 h-12 flex items-center">
                <div className="flex-grow">

                    <AniLink cover direction="left" bg="#374151" to="/">
                        <AnnotationIcon className="h-16 w-16 text-emerald-400"></AnnotationIcon>
                    </AniLink>
                </div>
                <div className="flex md:hidden">
                    <MenuIcon className='h-8 w-8 dark:file:text-gray-100 text-gray-500' />
                </div>
                <div className="hidden basis-1/4 md:flex space-x-6 justify-between">
                    <div className="dark:text-gray-400 text-gray-500 font-medium text-2xl">Projects</div>
                    <div className="dark:text-gray-400 text-gray-500 font-medium text-2xl">Blog</div>
                    <div className="dark:text-gray-400 text-gray-500 font-medium text-2xl">Contact</div>
                </div>
            </div>
        </div>
    )
}

export default SimpleNav