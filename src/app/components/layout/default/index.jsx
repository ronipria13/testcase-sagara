import React, { useEffect } from 'react'
import Navbar from '../navbar'
import Footer from '../footer'

const Layout = ({children,title = "TestCase"}) => {

    useEffect(() => {
        document.title = title
    },[title])

    return (
        <div className="min-h-screen flex flex-col">

            <Navbar />
        
        <div className="flex-grow">
            
            {children}
            
        </div>
        <div className="bg-gray-200">
          <Footer/>
        </div>
    </div>
    )
}

export default Layout
