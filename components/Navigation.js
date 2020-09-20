import React, { useState } from 'react'
import Link from 'next/link'


const navLinks = [
    {
        title: 'Главная',
        path: '/'
    },
    {
        title: 'Статьи',
        path: '/posts'
    },
    // {
    //     title: 'Обо мне',
    //     path: '/about-me'
    // }
]

export default function Navigation () {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <nav className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <div className="nav-title">
                    DR Blog
                </div>
            </div>
            <div className="nav-btn">
                <label htmlFor="nav-check" onClick={() => setMenuActive(!menuActive)}>
                    <span>fff</span>
                </label>
            </div>
            {console.log(menuActive)}

            <div className="nav-links">
                { navLinks.map((link, index) => (
                    <Link href={link.path} key={index}>{link.title}</Link>
                ))}
            </div>
        </nav>
    )
}
