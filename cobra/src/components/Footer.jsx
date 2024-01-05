import { useState, useEffect } from 'react';

export default function Footer() {
    return (
        <>  
            <div className='flex flex-wrap justify-center bg-black w-full h-96 text-white'>
                <div className='grid grid-cols-5 items-center justify-between w-3/5'>
                    <div className='footer-block flex flex-col w-100 h-60 p-2 text-[9px] leading-7'>
                            <header className="footer-title text-[10px]">Support</header>
                            <div className="w-full h-px bg-gray-600"></div>
                            <a className="link link-hover">Contact Us</a>
                            <a className="link link-hover">Track Your Order</a>
                            <a className="link link-hover">Returns</a>
                            <a className="link link-hover">Trade-In</a>
                            <a className="link link-hover">FAQ's</a>
                            <a className="link link-hover">Warranty & Repairs</a>
                    </div>
                    <div className='footer-block flex flex-col w-100 h-60 p-2 text-[9px] leading-7'>
                            <header className="footer-title text-[10px]">Tools</header>
                            <div className="w-full h-px bg-gray-600"></div>
                            <a className="link link-hover">Find a Filter</a>
                            <a className="link link-hover">Golf Team Program</a>
                            <a className="link link-hover">Product Registration</a>
                    </div>
                    <div className='footer-block flex flex-col w-100 h-60  p-2 text-[9px] leading-7'>
                            <header className="footer-title text-[10px]">About</header>
                            <div className="w-full h-px bg-gray-600"></div>
                            <a className="link link-hover">History</a>
                            <a className="link link-hover">Careers</a>
                    </div>
                    <div className='footer-block flex flex-col w-100 h-60 p-2 text-[9px] leading-7'>
                            <header className="footer-title text-[10px]">Follow</header>
                            <div className="w-full h-px bg-gray-600"></div>
                            <a className="link link-hover">Instagram</a>
                            <a className="link link-hover">Facebook</a>
                            <a className="link link-hover">Youtube</a>
                            <a className="link link-hover">Twitter</a>
                    </div>
                    <div className='footer-block flex flex-col w-100 h-60 p-3'>
                            <header className="footer-title text-[10px]">Join Our List</header>
                            <div className="w-full h-px bg-gray-600 mt-1"></div>
                            <div className="join mt-1">
                                <input type="text" placeholder="Email Address" className="p-2 join-item rounded-none" /> 
                                <button class="btn bg-gray-600 border-gray-600 rounded-none text-white hover:text-black text-2xl">+</button>
                            </div>
                            <select className="select select-sm mt-4 bg-black border-gray-600 rounded-none w-full text-[7px] focus:border-white focus:ring-1 focus:ring-white">
                                <option className='bg-white text-black' disabled selected>Change Country</option>
                                <option className='bg-white text-black'>Australia</option>
                                <option className='bg-white text-black'>Canada</option>
                                <option className='bg-white text-black'>Finland</option>
                                <option className='bg-white text-black'>France</option>
                                <option className='bg-white text-black'>Germany</option>
                                <option className='bg-white text-black'>Japan</option>
                                <option className='bg-white text-black'>Korea</option>
                                <option className='bg-white text-black'>Sweden</option>
                                <option className='bg-white text-black'>United Kingdom</option>
                                <option className='bg-white text-black'>United States</option>
                            </select>
                    </div>
                    <div className='mt-[-20px] flex justify-between w-full col-span-5 px-3 text-[7px] text-gray-400'>
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
