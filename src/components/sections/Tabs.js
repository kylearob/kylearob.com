import React, { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
    let [categories] = useState({
        "Step 1": [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        "Step 2": [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        "Step 3": [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    })

    return (
        <div className="w-full px-2 py-16 sm:px-0">
            <Tab.Group>
                <div className="grid grid-cols-4">
                    <Tab.List className="grid gap-4 rounded-xl">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    classNames(
                                        'w-full py-2.5 text-sm leading-5 font-medium text-indigo-500 rounded-lg bg-white shadow border-2 border-gray-50',
                                        'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-200 ring-white ring-opacity-60',
                                        selected
                                            ? 'bg-gray-50 shadow'
                                            : 'text-indigo-700 hover:translate-y-0.5'
                                    )
                                }
                            >
                                {category}

                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className="ml-2 col-span-3">
                        {Object.values(categories).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className={classNames(
                                    'bg-white rounded-xl p-3',
                                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
                                )}
                            >
                                <ul>
                                    {posts.map((post) => (
                                        <li
                                            key={post.id}
                                            className="relative p-3 rounded-md hover:bg-coolGray-100"
                                        >
                                            <h3 className="text-sm font-medium leading-5">
                                                {post.title}
                                            </h3>

                                            <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500">
                                                <li>{post.date}</li>
                                                <li>&middot;</li>
                                                <li>{post.commentCount} comments</li>
                                                <li>&middot;</li>
                                                <li>{post.shareCount} shares</li>
                                            </ul>

                                            <a
                                                href="#"
                                                className={classNames(
                                                    'absolute inset-0 rounded-md',
                                                    'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
                                                )}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </div>
            </Tab.Group>
        </div>
    )
}
