import React from 'react'
import SimpleNav from './navigation/SimpleNav'
import Footer from './navigation/Footer'

const Layout = ({ children }) => {
    return (

        <div id="outer" className="flex flex-col min-h-screen dark:bg-gray-700 bg-gray-100">
            {/* <div id="inner" className="flex-grow"> */}
            <SimpleNav />
            <div>{children}</div>
            {/* </div> */}
            <Footer />
        </div>


    )
}

export default Layout