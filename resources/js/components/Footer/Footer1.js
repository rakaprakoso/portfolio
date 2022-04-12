// import Link from 'next/link'
// import Image from 'next/image'

import menuItems from "../Header/Header.data";
import socialIcons from "./Footer.data";

import { useEffect, useState } from "react";
import { Link as ScrollLink} from 'react-scroll'

const Footer1 = () => {
    return (
        <footer className="">
            <div className="section-wrapper">
                <div className="container-fluid">
                    <div className="py-10 px-8 bg-primaryLight-50 rounded-lg shadow-lg">
                        <div className="row">
                            <div className="col-lg-4 flex">
                                <div className=" flex-grow lg:text-left text-center lg:mb-0 mb-6">
                                    <a href="/" className="footer-brand">
                                        <img
                                            src="/img/logo big.png"
                                            alt="logo"
                                            width="100px"
                                            height="100px"
                                        />
                                        <span>Raka D Prakoso</span>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 flex items-end lg:text-left text-center">
                                <div className="flex-grow  lg:mb-0 mb-6">
                                    <div className="footer-link">
                                        <nav>
                                            <div className="font-semibold">
                                                Navigation Menu
                                            </div>
                                            <ul>
                                                {menuItems.map((item, i) => (
                                                    <li key={i}>
                                                        <ScrollLink
                                                            // href={menuItem.path}
                                                            activeClass="active"
                                                            to={item.pathID}
                                                            spy={true}
                                                            smooth={true}
                                                            offset={0}
                                                            duration={700}
                                                            delay={100}
                                                            className="nav-link"
                                                        >
                                                            {item.label}
                                                        </ScrollLink>
                                                        {/* <a href={item.path}>{item.label}</a> */}
                                                    </li>
                                                ))}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 flex items-end lg:text-right text-center">
                                <div className="flex-grow-1">
                                    <div className="social-icons">
                                        {socialIcons.map((item, i) => (
                                            <a
                                                key={i}
                                                className=""
                                                href={item.url}
                                            >
                                                {item.icon}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-4 text-center">
                        Copyright 2021 &copy; Designed by Erkade Tech
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer1;
