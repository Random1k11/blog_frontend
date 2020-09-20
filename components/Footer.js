import React, { useState } from 'react'


export default function Footer () {

    return (
        <footer>
            <div className="footer-container">
                <div className="center box">
                    <div className="content">
                        <div className="place">
                            <span className="fas fa-map-marker-alt"></span>
                            <span className="text">Russia, Moscow</span>
                        </div>
                        <div className="phone">
                            <span className="fas fa-phone-alt"></span>
                            <span className="text">+7 (977) 408 33 27</span>
                        </div>
                        <div className="email">
                            <span className="fas fa-email-alt"></span>
                            <span className="text">random1k11@yandex.ru</span>
                        </div>
                        <span className="text">© 2020 by Dmitry Rusanov.</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}
