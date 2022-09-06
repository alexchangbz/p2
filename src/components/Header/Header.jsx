import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { motion } from 'framer-motion'
import { Bg1, Bg2, Bg3, Bg4, Bg5, Bg6, Bg7, Bg8, Bg9, Bg10 } from '../../assets'
import './header.css'

const background = [Bg1, Bg2, Bg3, Bg4, Bg5, Bg6, Bg7, Bg8, Bg9, Bg10]

const Header = () => {
    const [bg, setBg] = useState(Bg1)

    useEffect(() => {
        const num = Math.floor(Math.random() * 9)
        setBg(background[num])
    }, [bg])
    

    return (
        <div
            style={{ backgroundImage: `url(${bg})`}} 
            className='container__header'
        >
            <div className="header__filter">
                <Navbar />
                <div className="header__content">
                    <motion.img 
                        animate={{ width: "220px", height: "220px" }}
                        transition={{ duration: 0.5 }}
                        className="header__profile" src={require('../../assets/profile.png')} alt="profile" 
                    />
                    <motion.h1
                        animate={{
                            fontSize: "70px"
                        }}
                        transition={{
                            duration: 0.5,
                            delay: 0.4
                        }}
                    >
                        Hi, I'm Alex Chang
                    </motion.h1>
                    <motion.h2
                        animate={{ fontSize: "24px" }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        I'm a Full Stack Blockchain Developer
                    </motion.h2>
                </div>
            </div>
        </div>
    )
}

export default Header