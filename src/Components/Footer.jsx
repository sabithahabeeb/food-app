import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div className='bg-zinc-500'>
            {/* <h1>Zomato</h1> */}
            <img className='font-bold text-4xl ml-5 p-5 pt-9 w-[150px] h-[150px]' src="https://b.zmtcdn.com/images/logo/zomato_flat_bg_logo.svg" alt="no image" />
            
            <div className='flex flex-row justify-evenly'>
                <div className="abtzomato">
                    <h3 className='font-bold text-1xl'>ABOUT ZOMATO</h3>
                    <div className='flex flex-col'>
                        <Link className='text-gray-200'>Who We Are</Link>
                        <Link className='text-gray-200'>Blog</Link>
                        <Link className='text-gray-200'>Work With Us</Link>
                        <Link className='text-gray-200'>Invester Relations</Link>
                        <Link className='text-gray-200'>Report Fraud</Link>
                        <Link className='text-gray-200'>Press Kit</Link>
                        <Link className='text-gray-200'>Contact Us</Link>
                    </div>

                </div>
                <div className="zomaverse">
                    <h3 className='font-bold text-1xl'>ZOMEAVERSE</h3>
                    <div className='flex flex-col'>
                        <Link className='text-gray-200'>Zomato</Link>
                        <Link className='text-gray-200'>Blinkit</Link>
                        <Link className='text-gray-200'>Feeding India</Link>
                        <Link className='text-gray-200'>Hyperpure</Link>
                        <Link className='text-gray-200'>Zomaand</Link>
                        <Link className='text-gray-200'>Press Kit</Link>
                        <Link className='text-gray-200'>Contact Us</Link>
                    </div>
                </div>
                <div className="forrestaurents">
                    <h3 className='font-bold text-1xl'>For RESTAURENTS</h3>
                    <div className='flex flex-col'>
                        <Link className='text-gray-200'>Partner With Us</Link>
                        <Link className='text-gray-200'>Apps For You</Link>
                        <h3 className='font-bold text-1xl'>FOR ENTERPRICES</h3>
                        <Link className='text-gray-200'>Zomato for Enterprices</Link>

                    </div>
                </div>
                <div className="learnmore">
                    <h3 className='font-bold text-1xl'>LEARN MORE</h3>
                    <div className='flex flex-col'>
                        <Link className='text-gray-200'>Privacy</Link>
                        <Link className='text-gray-200'>Security</Link>
                        <Link className='text-gray-200'>Terms</Link>
                        <Link className='text-gray-200'>SiteMap</Link>

                    </div>
                </div>
                <div className="sociallinks">
                    <h3 className='font-bold text-1xl'>SOCIAL LINKS</h3>

                    <div className='flex flex-row justify-evenly '>
                        <Link className='p-3'><i className="fa-brands fa-linkedin fa-2xl"></i></Link>
                        <Link className='p-3'><i class="fa-brands fa-square-instagram fa-2xl"></i></Link>
                        <Link className='p-3'><i class="fa-brands fa-twitter fa-2xl"></i></Link>
                        <Link className='p-3'><i class="fa-brands fa-youtube fa-2xl"></i></Link>
                        <Link className='p-3'><i class="fa-brands fa-facebook fa-2xl"></i></Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer