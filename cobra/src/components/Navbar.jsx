import globoGymGolf from '../assets/globo-gym-golf.png'


import React, { useState, useEffect } from 'react';
import FullScreenDropdown from './FullScreenDropdown';




function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}




export default function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false); // New state for sidebar
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [dropdownContent, setDropdownContent] = useState('');


    const handleScroll = debounce(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
            // Scrolling up
            setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
            // Scrolling down
            setIsVisible(false);
            setDropdownVisible(false);
        }

        setLastScrollY(currentScrollY);
    }, 100);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    useEffect(() => {
        if (sidebarOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [sidebarOpen]);

    // Function to toggle sidebar
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const handleLinkClick = (content) => {
        if (dropdownContent === content && dropdownVisible) {
            // If the same link is clicked and dropdown is visible, hide it
            setDropdownVisible(false);
        } else {
            // Show the dropdown with the new content
            setDropdownContent(content);
            setDropdownVisible(true);
        }
    };
    
    // Function to close the dropdown
    const handleCloseDropdown = () => {
        setDropdownVisible(false);
    };

    return (

        <div className={`navbar h-16 border-b-2 bg-base-100 z-50 navbar-transition ${isVisible ? '' : 'navbar-hidden'}`}>
            {/* Navbar content */}
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" onClick={toggleSidebar} /> 
                <div className="drawer-content flex flex-row">
                    {/* Navbar */}
                    <div className="navbar bg-base-100">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div> 
                        <div className="navbar-start flex justify-center w-4/5 lg:w-1/5 lg:justify-start">
                            <a className="text-xl">
                                <img src="https://cdn.shopify.com/s/files/1/0634/7833/3657/files/COBRA-logo-2023-black.svg?v=1689364201" alt="logo" className="w-28" />
                            </a>
                        </div>
                        <div className="navbar-center hidden lg:flex justify-center w-3/5">
                            <ul className="menu-horizontal custom-navbar">
                            {/* Navbar menu content here */}
                            <li><a onClick={() => handleLinkClick('Clubs')} className="text-base text-black ml-12 cursor-pointer font-titillium font-semibold">Clubs</a></li>
                            <li><a onClick={() => handleLinkClick('Accessories')} className="text-base text-black mx-2 cursor-pointer font-titillium font-semibold px-4">Accessories</a></li>
                            <li><a href='https://www.cobragolf.com/pages/arccos-caddie' className="text-base text-black mx-2 cursor-pointer font-titillium font-semibold px-4">Arccos Caddie</a></li>
                            <li><a onClick={() => handleLinkClick('Custom Fitting')} className="text-base text-black mx-2 cursor-pointer font-titillium font-semibold px-4">Custom Fitting</a></li>
                            <li><a onClick={() => handleLinkClick('On Tour')} className="text-base text-black mx-2 cursor-pointer font-titillium font-semibold px-4">On Tour</a></li>
                            <li><a href='https://www.cobragolf.com/collections/cobra-sale' className="text-base text-black mx-2 cursor-pointer font-titillium font-semibold">Sale</a></li>
                            </ul>

                            <FullScreenDropdown 
                                isVisible={dropdownVisible} 
                                content={dropdownContent} 
                                onClose={handleCloseDropdown} 
                            />
                        </div>
                        <div className="navbar-end flex justify-end w-1/5">
                            <button className="scale-hover mx-2">
                                <span className="material-symbols-outlined">search</span>
                            </button>
                            <button className="hidden sm:block scale-hover mx-2">
                                <span className="material-symbols-outlined">person</span>
                            </button>
                            <button className="scale-hover mx-2">
                                <span className="material-symbols-outlined">shopping_bag</span>
                            </button>
                        </div>
                    </div>
                </div> 
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label> 
                    <ul className="menu p-4 w-80 mt-20 h-[875px] border-t-2 bg-base-200">
                    {/* Sidebar content here */}
                        <li><a className="text-base text-black mt-10 cursor-pointer">Clubs</a></li>
                        <li><a className="text-base text-black cursor-pointer">Accessories</a></li>
                        <li><a className="text-base text-black cursor-pointer">Arccos Caddie</a></li>
                        <li><a className="text-base text-black cursor-pointer">Custom Fitting</a></li>
                        <li><a className="text-base text-black cursor-pointer">On Tour</a></li>
                        <li><a href="https://www.cobragolf.com/collections/cobra-sale" className="text-base text-black cursor-pointer">Sale</a></li>
                        <div className="mt-[450px]">
                            <a href="https://www.cobragolf.com/account/login" className="flex items-center hover:text-gray-500">
                                <span className="material-symbols-outlined ">person</span>
                                <span className="border-b border-transparent hover:border-current">Log in</span>
                            </a>
                        </div>
                        <div className="flex flex-row mt-14">
                            <a href="https://twitter.com/pumagolf" className="flex items-center mr-2 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110 group-hover:fill-gray-500"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg></a>
                            <a href="https://www.facebook.com/PUMAGolf" className="flex items-center mx-4 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110 group-hover:fill-gray-500"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>                            </a>
                            <a href="https://www.instagram.com/pumagolf/" className="flex items-center mx-2 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110 group-hover:fill-gray-500"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                            </a>
                            <a href="https://www.youtube.com/user/cobragolfvideos" className="flex items-center mx-4 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="transition-transform duration-300 group-hover:scale-110 group-hover:fill-gray-500"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
}