import { useState, useEffect } from 'react';

export default function Footer() {
    return (
        <>  
            <div className='flex flex-wrap justify-center bg-black w-full h-96 text-white'>
                <div className='grid grid-cols-5 items-center justify-between w-3/5 border-2 border-white'>
                    <div className='footer-block flex flex-col w-100 h-80 border border-white p-3'>
                            <header className="footer-title">Support</header>
                            <div className="w-full h-px bg-gray-600 mt-1"></div>
                            <a className="link link-hover">Contact Us</a>
                            <a className="link link-hover">Track Your Order</a>
                            <a className="link link-hover">Returns</a>
                            <a className="link link-hover">Trade-In</a>
                            <a className="link link-hover">FAQ's</a>
                            <a className="link link-hover">Warranty & Repairs</a>
                    </div>
                    <div className='footer-block flex flex-col w-100 h-80 border border-white p-3'>
                            <header className="footer-title">Tools</header>
                            <div className="w-full h-px bg-gray-600 mt-1"></div>
                            <a className="link link-hover">Find a Filter</a>
                            <a className="link link-hover">Golf Team Program</a>
                            <a className="link link-hover">Product Registration</a>
                    </div>
                    <div className='footer-block flex flex-col w-100 h-80 border border-white p-3'>
                            <header className="footer-title">About</header>
                            <div className="w-full h-px bg-gray-600 mt-1"></div>
                            <a className="link link-hover">History</a>
                            <a className="link link-hover">Careers</a>
                    </div>
                    <div className='footer-block flex flex-col w-100 h-80 border border-white p-3'>
                            <header className="footer-title">Follow</header>
                            <div className="w-full h-px bg-gray-600 mt-1"></div>
                            <a className="link link-hover">Instagram</a>
                            <a className="link link-hover">Facebook</a>
                            <a className="link link-hover">Youtube</a>
                            <a className="link link-hover">Twitter</a>
                    </div>
                    <div className='footer-block flex flex-col w-100 h-80 border border-white p-3'>
                            <header className="footer-title">Follow</header>
                            <div className="w-full h-px bg-gray-600 mt-1"></div>
                            <a className="link link-hover">Instagram</a>
                            <a className="link link-hover">Facebook</a>
                            <a className="link link-hover">Youtube</a>
                            <a className="link link-hover">Twitter</a>
                    </div>
                    <div className='flex justify-between w-full col-span-5 px-3 text-[7px] text-gray-400'>
                        <div className='flex gap-2'>
                                <a className="link link-hover">Community Policies</a>
                                <a className="link link-hover">Terms & Conditions</a>
                                <a className="link link-hover">Privacy Policy</a>
                                <a className="link link-hover">Do not sell my personal information</a>
                        </div>
                        <p className=''>@ 2024 COBRA Golf_Inc All rights reserved</p>
                    </div>
                </div>
                
            </div>
        </>
    );
}
