import React from 'react'
import { Fade } from 'react-reveal'

const items = [
    {
        number: "01",
        title: "Style",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, molestiae mollitia? Nobis accusamus sunt tenetur fugit mollitia earum officia adipisci. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, molestiae mollitia? Nobis accusamus sunt tenetur fugit mollitia earum officia adipisci.",
    },
    {
        number: "02",
        title: "Technical",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, molestiae mollitia? Nobis accusamus sunt tenetur fugit mollitia earum officia adipisci. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, molestiae mollitia? Nobis accusamus sunt tenetur fugit mollitia earum officia adipisci.",
    },
    {
        number: "03",
        title: "Trust",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, molestiae mollitia? Nobis accusamus sunt tenetur fugit mollitia earum officia adipisci. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, molestiae mollitia? Nobis accusamus sunt tenetur fugit mollitia earum officia adipisci.",
    }
]

const Features = () => {
    return (
        <div className="container mx-auto py-12">
            <div className="flex flex-row items-center">
                <div className="flex-auto border h-0 border-zinc-800"></div>
                <p className="ml-4 font-bold uppercase">Things to know</p>
            </div>

            <Fade bottom cascade>
                <div className="my-12 grid md:grid-cols-3 gap-4">
                    {items.map((item) => (
                        <div className="">
                            <div className="flex items-baseline">
                                <h1 className="text-3xl mb-2">{item.number}</h1>
                                <h1 className="text-xl ml-2 mb-2">{item.title}</h1>
                            </div>
                            <p className="">{item.description}</p>
                        </div>
                    ))}
                </div>
            </Fade>
        </div>
    )
}

export default Features