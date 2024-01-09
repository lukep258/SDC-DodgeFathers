import { useState, useEffect } from 'react';

export default function Footer() {

    
    
    return (
        <>  
            <div className='flex flex-wrap justify-center bg-black w-full h-96 text-white font-titillium'>
                <div className='grid grid-cols-5 items-center justify-between w-4/5'>
                    <div className='footer-block flex flex-col w-100 h-60 p-2 leading-7'>
                            <header className="footer-title text-xl">Support</header>
                            <div className="w-full h-px bg-gray-600"></div>
                                <a href="https://www.cobragolf.com/pages/contact" className="link link-hover">Contact Us</a>
                                <a href="https://www.cobragolf.com/account" className="link link-hover">Track Your Order</a>
                                <a href="https://www.cobragolf.com/pages/returns" className="link link-hover">Returns</a>
                                <a href="https://www.cobragolf.com/pages/trade-in" className="link link-hover">Trade-In</a>
                                <a href="https://www.cobragolf.com/pages/faq" className="link link-hover">FAQ's</a>
                                <a href="https://www.cobragolf.com/pages/warranty" className="link link-hover">Warranty & Repairs</a>
                            </div>
                    <div className='footer-block flex flex-col w-100 h-60 p-2 leading-7'>
                            <header className="footer-title text-xl">Tools</header>
                            <div className="w-full h-px bg-gray-600"></div>
                                <a href="https://www.cobragolf.com/pages/find-a-fitter" className="link link-hover">Find a Filter</a>
                                <a href="https://www.cobragolf.com/pages/team-sales" className="link link-hover">Golf Team Program</a>
                                <a href="https://www.cobragolf.com/pages/product-registration" className="link link-hover">Product Registration</a>
                            </div>
                    <div className='footer-block flex flex-col w-100 h-60  p-2 leading-7'>
                            <header className="footer-title text-xl">About</header>
                            <div className="w-full h-px bg-gray-600"></div>
                                <a href="https://www.cobragolf.com/pages/history" className="link link-hover">History</a>
                                <a href="https://www.cobragolf.com/careers" className="link link-hover">Careers</a>
                            </div>
                    <div className='footer-block flex flex-col w-100 h-60 p-2 leading-7'>
                            <header className="footer-title text-xl">Follow</header>
                            <div className="w-full h-px bg-gray-600"></div>
                                <a href="https://www.instagram.com/cobragolf" className="link link-hover">Instagram</a>
                                <a href="https://www.facebook.com/cobra" className="link link-hover">Facebook</a>
                                <a href="https://www.youtube.com/user/cobragolfvideos" className="link link-hover">Youtube</a>
                                <a href="https://twitter.com/cobragolf" className="link link-hover">Twitter</a>
                            </div>
                    <div className='footer-block flex flex-col w-100 h-60 p-3'>
                            <header className="footer-title text-l">Join Our List</header>
                            <div className="w-full h-px bg-gray-600 mt-1"></div>
                            <div className="join mt-1">
                                <input type="text" placeholder="Email Address" className="p-2 join-item rounded-none w-full" /> 
                                <button className="btn bg-gray-600 border-gray-600 rounded-none text-white hover:text-black text-2xl">+</button>
                            </div>
                            <select onChange={(e) => window.location.href = e.target.value} className="select select-sm mt-4 bg-black border-gray-600 rounded-none w-full text-[7px] focus:border-white focus:ring-1 focus:ring-white">
                                <option className='bg-white text-black' disabled selected>Change Country</option>
                                <option value="https://www.cobragolf.com/en-au" className='bg-white text-black'>Australia</option>
                                <option value="https://cobragolf.ca" className='bg-white text-black'>Canada</option>
                                <option value="https://www.cobragolf.com/fi-eu" className='bg-white text-black'>Finland</option>
                                <option value="https://www.cobragolf.com/fr-eu" className='bg-white text-black'>France</option>
                                <option value="https://www.cobragolf.com/de-eu" className='bg-white text-black'>Germany</option>
                                <option value="https://www.cobragolf.com/ja-jp" className='bg-white text-black'>Japan</option>
                                <option value="https://www.cobragolf.com/ko-kr" className='bg-white text-black'>Korea</option>
                                <option value="https://www.cobragolf.com/en-eu" className='bg-white text-black'>Sweden</option>
                                <option value="https://www.cobragolf.com/en-uk" className='bg-white text-black'>United Kingdom</option>
                                <option value="https://www.cobragolf.com/" className='bg-white text-black'>United States</option>
                            </select>
                    </div>
                    <div className='mb-10 flex justify-between w-full col-span-5 px-3 text-l text-gray-400'>
                        <div className='flex gap-2'>
                                <a href="https://www.cobragolf.com/pages/community-policies" className="link link-hover">Community Policies</a>
                                <a href="https://www.cobragolf.com/pages/terms" className="link link-hover">Terms & Conditions</a>
                                <a href="https://www.cobragolf.com/pages/privacy-policy" className="link link-hover">Privacy Policy</a>
                                <a href="https://www.cobragolf.com/pages/ccpa-opt-out" className="link link-hover">Do not sell my personal information</a>
                        </div>
                        <p className=''>@ 2024 COBRA Golf_Inc All rights reserved</p>
                    </div>
                </div>
                
            </div>
        </>
    );
}
