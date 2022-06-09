import React from "react";
import './Box.css'

import Header from './Header'
import User from './User'
import Main from './Main'
import Footer from './Footer'


export default function Box() {

    return (
        <div className="main-box">
            <Header />
            <User />
            <Main />
            <Footer />
        </div>
    )
}
