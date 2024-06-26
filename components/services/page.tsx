import React from "react";
import './services.css'
const servicesData = [
    {
        imageSrc: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121.webp",
        imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121-p-500.webp 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121-p-800.webp 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121.webp 902w",
        title: "Ultimate Interview Preparation Course",
        description: "Get more than 200 sample answers that will fit any job role. Now, you have well-crafted...",
        link: "/interview"
    },
    {
        imageSrc: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2).png",
        imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2)-p-500.png 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2)-p-800.png 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2)-p-1080.png 1080w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2).png 1344w",
        title: "ATS Friendly Resume (Experienced)",
        description: "Resume is the first step to landing your dream job. A recruiter or a talent acquisition...",
        link: "https://dikshaarora.com/services/resume-building"
    },
    {
        imageSrc: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3).png",
        imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3)-p-500.png 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3)-p-800.png 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3)-p-1080.png 1080w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3).png 1344w",
        title: "LinkedIn Profile Optimisation",
        description: "LinkedIn is the most powerful modern day tool to build a strong Personal Brand and a...",
        link: "https://dikshaarora.com/web/checkout/641215caf6895898d1ec5619"
    },
];
const servicesData2 = [
    {
        imageSrc: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344.webp",
        imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344-p-500.webp 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344-p-800.webp 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344.webp 902w",
        title: "Building A Perfect ATS Friendly Resume (Freshers)",
        description: "Resume is the first step to landing your dream job. A recruiter or a talent acquisition...",
        link: "https://dikshaarora.com/services/resume-freshers"
    },
];

const Services = () => {
    return (
        <section className="section_services">
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
                                            <a href={service.link} className="button is-secondary w-button">Register Now</a>
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
                                                <a href={service.link} className="button is-secondary w-button">Register Now</a>
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