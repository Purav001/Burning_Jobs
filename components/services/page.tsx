import React from "react";
import './services.css'
import Pay from '@/components/paymentInterface/page'
const servicesData = [
    {
        id: 1,
        imageSrc: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121.webp",
        imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121-p-500.webp 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121-p-800.webp 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121.webp 902w",
        title: "Ultimate Interview Preparation Course",
        slug: "ultimate-interview",
        description: "Get more than 200 sample answers that will fit any job role. Now, you have well-crafted...",
        link: "This course has been designed to provide both freshers and experience holders with an all-round preparation for acing their job interviews. You will learn all aspects related to job interviews which includes the right technique to open your interview, most frequently asked interview questions and 200+ sample answers that will fit any job role. Most important, learn the exact strategy that you need to negotiate your salary so that you get what is rightfully yours. Once you will complete the course, you will walk into the interview room well prepared to handle any tricky situation. ",
    },
    {
        id: 2,
        imageSrc: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2).png",
        imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2)-p-500.png 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2)-p-800.png 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2)-p-1080.png 1080w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2).png 1344w",
        title: "ATS Friendly Resume (Experienced)",
        slug: "ats-experienced",
        description: "Resume is the first step to landing your dream job. A recruiter or a talent acquisition...",
        link: "Before a resume reaches the hands of a hiring manager, it often must pass an ATS — Applicant Tracking System. An ATS is a software used by recruiters to collect, sort, scan, and rank the resumes they receive for open positions. Even a well qualified candidate might fail to get an interview call if the resume does not satisfy the ATS. Using the right keywords in the resume as per the job description is essential to have your resume short listed. Since, your resume reaches the recruiter before you, it is essential that your resume is the perfect reflection of your skill set.",
    },
    {
        id: 3,
        imageSrc: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3).png",
        imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3)-p-500.png 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3)-p-800.png 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3)-p-1080.png 1080w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3).png 1344w",
        title: "LinkedIn Profile Optimisation",
        slug: 'linkedin-profile',
        description: "LinkedIn is the most powerful modern day tool to build a strong Personal Brand and a...",
        link: "LinkedIn is the most powerful modern day tool to build a strong Personal Brand and a strong Professional Network to accelerate career growth. It helps job seekers come in the notice of Recruiters and makes the entire process of job search easier. ",
    },
];
const servicesData2 = [
    {
        id: 4,
        imageSrc: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344.webp",
        imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344-p-500.webp 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344-p-800.webp 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344.webp 902w",
        title: "Building A Perfect ATS Friendly Resume (Freshers)",
        slug: "ats-freshers",
        description: "Resume is the first step to landing your dream job. A recruiter or a talent acquisition...",
        link: "Before a resume reaches the hands of a hiring manager, it often must pass an ATS — Applicant Tracking System. An ATS is a software used by recruiters to collect, sort, scan, and rank the resumes they receive for open positions. Even a well qualified candidate might fail to get an interview call if the resume does not satisfy the ATS. Using the right keywords in the resume as per the job description is essential to have your resume short listed. Since, your resume reaches the recruiter before you, it is essential that your resume is the perfect reflection of your skill set.",
    },
    {
        id: 5,
        imageSrc: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64cb97c693daf9d341895669_Frame.png",
        imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64cb97c693daf9d341895669_Frame-p-500.png 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64cb97c693daf9d341895669_Frame-p-800.png 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64cb97c693daf9d341895669_Frame-p-1080.png 1080w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64cb97c693daf9d341895669_Frame-p-1600.png 1600w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64cb97c693daf9d341895669_Frame.png 1803w",
        title: "Master Program With Live Sessions",
        slug: 'master-program',
        description: "One-One Job Interview Preparation Program target is to ensure that you head confidently for your interview and emerge as a strong potential candidate who is the right fit for the job ",
        link: "The 'Master Program with Live Sessions' is a comprehensive career advancement package designed to help both freshers and experienced professionals excel in their interview process. With personalized coaching from Diksha Arora, it includes one-on-one interview preparation sessions, mock interview, an ATS-friendly resume and cover letter, LinkedIn profile optimization, and a customized set of interview Q&A tailored to your specific job role. Additionally, you’ll receive a downloadable PDF for convenient revision, ensuring you are fully prepared to succeed in your career pursuits.",
    },
];

const Services = () => {
    return (
        <section id="Services" className="section_services">
            <div className="padding-global">
                <div id="Services" className="container-large">
                    <div className="services_wrapper">
                        <div className="services_heading-wrapper">
                            <h2>Services Offered</h2>
                        </div>
                        <div className="services_card-wrapper">
                            {servicesData.map((service, index) => (
                                <div className="services_card" key={index}>
                                    <div className="services_card-image">
                                        <img 
                                            src={service.imageSrc}
                                            srcSet={service.imageSrcSet}
                                            sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 450px, (max-width: 1279px) 30vw, (max-width: 1919px) 31vw, 450px"
                                            alt="" 
                                            className="image-10" 
                                        />
                                    </div>
                                    <div className="services_card-content">
                                        <div className="services_card_heading-wrapper">
                                            <h3>{service.title}</h3>
                                            <p className="text-weight-light">{service.description}</p>
                                        </div>
                                        <div className="services_card_button-wrapper">
                                            <a href={`/service/${service.slug}`} className="button is-secondary w-button">Register Now</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="services_card-wrapper _1">
                            {servicesData2.map((service, index) => (
                                    <div className="services_card" key={index}>
                                        <div className="services_card-image">
                                            <img 
                                                src={service.imageSrc}
                                                srcSet={service.imageSrcSet}
                                                sizes="(max-width: 479px) 100vw, (max-width: 767px) 92vw, (max-width: 991px) 450px, (max-width: 1279px) 30vw, (max-width: 1919px) 31vw, 450px"
                                                alt="" 
                                                className="image-10" 
                                            />
                                        </div>
                                        <div className="services_card-content">
                                            <div className="services_card_heading-wrapper">
                                                <h3>{service.title}</h3>
                                                <p className="text-weight-light">{service.description}</p>
                                            </div>
                                            <div className="services_card_button-wrapper">
                                                <a href={`/service/${service.slug}`} className="button is-secondary w-button">Register Now</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Services