import React from 'react'
import './foot.css'
const Footer = () => {
return (
    <div className='padding-global bg-[#1b2528]'>
        <footer className="footer  text-base-content p-10" style={{borderBottom:'1px solid grey'}}>
            <aside>
                <img
                    src="/images/logo-white.png"
                    alt="Logo"
                    className="h-20 w-auto font-bold mr-4"
                />
                <h1 className='text-[#ffdc54]' style={{fontSize:'25px'}}>
                <strong><a href='/'>Burning Jobs</a></strong>
                </h1>
                <p>
                A brand of <strong className='text-[#fff]'><a href='https://exemplar.co.in/' target='_blank'>Exemplar Global Resources Pvt Ltd</a></strong>
                </p>
            </aside>
            <nav>
                <h6 className="text-[#ffdc54]" style={{fontWeight:'600'}}>Company</h6>
                <a className="link link-hover text-[#fff]" href='#About'>About us</a>
                <a className="link link-hover text-[#fff]" href='/courses'>Courses</a>
                <a className="link link-hover text-[#fff]" href='/contact-us'>Job Openings</a>
            </nav>
            <nav>
                <h6 className="text-[#ffdc54]" style={{fontWeight:'600'}}>Services</h6>
                <a className="link link-hover text-[#fff]" href='/services'>Interview Preperation</a>
                <a className="link link-hover text-[#fff]"href='/services'>Resume building (Experienced)</a>
                <a className="link link-hover text-[#fff]"href='/services'>Resume Building (Freshers)</a>
                <a className="link link-hover text-[#fff]"href='/services'>Linkedin Optimisation</a>                
                <a className="link link-hover text-[#fff]"href='/services'>Live Sessions</a>

            </nav>
            <nav>
                <h6 className="text-[#ffdc54]" style={{fontWeight:'600'}}>Legal</h6>
                <a className="link link-hover text-[#fff]">Privacy Policy</a>
                <a className="link link-hover text-[#fff]">Terms of Service</a>
                <a className="link link-hover text-[#fff]">Refund Policy</a>
            </nav>
            <nav>
                <h6 className="text-[#ffdc54]" style={{fontWeight:'600'}}>Get in Touch!</h6>
                <a className="link link-hover text-[#fff]" href='/contact-us'>Contact Us</a>
                <a className="link link-hover text-[#fff]" href="https://wa.me/917986573918" target='_blank'>Watsapp</a>
            </nav>
        </footer>
        <footer className='footer footer-center p-4 flex text-base-content' style={{justifyContent:'space-between'}}> { /* bg-base-300 */}
            <p>Copyright &copy; 2024 - All rights reserved by Burning Jobs</p>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                
                <a href='https://www.instagram.com/burningjobs/' target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width={24}
                height={24}
                className='hov'
                viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
                </a>
                <a href='https://www.linkedin.com/company/burning-jobs-career/about/' target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width={24}
                height={24}
                className='hov'
                viewBox="0 0 448 512">
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/>
                </svg>
                </a>
                <a href='https://www.youtube.com/@BurningJobs' target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" 
                width={24}
                height={24}
                className='hov'
                viewBox="0 0 576 512">
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                </svg>
                </a>
                <a href='https://www.youtube.com/@BurningJobs' target='_blank'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    width={24}
                    height={24}
                    className='hov'
                    viewBox="0 0 576 512">
                    </svg>
                </a>
            </nav>
        </footer>
    </div>
)
}

export default Footer