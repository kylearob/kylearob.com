import { ArrowCircleUpIcon, CalendarIcon, ChevronRightIcon, CogIcon, HomeIcon, InboxIcon, PencilAltIcon, SearchIcon, ViewGridIcon } from '@heroicons/react/outline'
import React from 'react'

const app = () => {
    return (
        <div id="outer" className='min-h-screen flex flex-col bg-neutral-100'>
            <div id="inner" className="flex-grow">

                {/* navigation  */}
                <div className="bg-neutral-800 text-white py-3 px-4">
                    <div className="flex justify-between">
                        <ArrowCircleUpIcon className='h-8 w-8 stroke-[1.5px]' />
                        <CogIcon className='h-8 w-8 stroke-[1.5px]' />
                    </div>
                </div>

                {/* section 1  */}
                <div className="m-4 rounded-lg border overflow-hidden border-neutral-200/50 grid divide-y text-neutral-800 bg-neutral-100">
                    <div className="py-2 px-2 bg-white flex items-center"><CalendarIcon className='h-6 w-6 text-red-500 mr-2 stroke-[1.5px]' /><p className='align-middle'>Item 1</p></div>
                    <div className="py-2 px-2 bg-white flex items-center"><InboxIcon className='h-6 w-6 text-green-500 mr-2 stroke-[1.5px]' /><p className='align-middle'>Item 1</p></div>
                    <div className="py-2 px-2 bg-white flex items-center"><ViewGridIcon className='h-6 w-6 text-blue-500 mr-2 stroke-[1.5px]' /><p className='align-middle'>Item 1</p></div>

                </div>

                {/* section 2  */}
                <div className="m-4 rounded-lg border overflow-hidden border-neutral-200/50 grid divide-y text-neutral-800 bg-neutral-100">
                    <div className="py-2 px-2 bg-white flex justify-between items-center"><p>List Item Name</p><ChevronRightIcon className='h-4 w-4 text-neutral-400' /> </div>
                    <div className="py-2 px-2 bg-white flex justify-between items-center"><p>List Item Name</p><ChevronRightIcon className='h-4 w-4 text-neutral-400' /> </div>
                    <div className="py-2 px-2 bg-white flex justify-between items-center"><p>List Item Name</p><ChevronRightIcon className='h-4 w-4 text-neutral-400' /> </div>
                </div>
            </div>

            {/* footer  */}
            <div className="bg-neutral-800 text-white py-4">
                <div className="flex justify-around">
                    <ArrowCircleUpIcon className='h-10 w-10 stroke-[1.5px]' />
                    <PencilAltIcon className='h-10 w-10 stroke-[1.5px]' />
                    <HomeIcon className='h-10 w-10 stroke-[1.5px]' />
                    <SearchIcon className='h-10 w-10 stroke-[1.5px]' />
                    <CogIcon className='h-10 w-10 stroke-[1.5px]' />
                </div>
            </div>
        </div>
    )
}

export default app