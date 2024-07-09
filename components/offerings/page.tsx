import React from 'react';
import './ic.css'

const courseDetails = [
{
    heading: 'Freshers',
    imgSrc: 'https://assets-global.website-files.com/64526d2b6aa1e776b5190943/645534da038cbb8e9ee9f61a_graduation%20(2)%201.svg',
    description: 'This course is tailored for freshers to improve their interview skills and gain a competitive edge in the job market. With expert coaching and practical training, they can learn valuable skills and techniques to confidently navigate the interview process and secure their dream job.',
},
{
    heading: 'Experience Holders',
    imgSrc: 'https://assets-global.website-files.com/64526d2b6aa1e776b5190943/645534dbeb948732b91835fa_badge%20(2)%201.svg',
    description: 'This course is designed for experienced professionals who want to improve their interview skills and increase their chances of landing their desired job. With our expert coaching and practical training, they can learn effective techniques to ace interviews and stand out in a competitive job market.',
},
{
    heading: 'Candidates looking for a Job Switch',
    imgSrc: 'https://assets-global.website-files.com/64526d2b6aa1e776b5190943/645534da13d4620a9730a8ac_switch-job%201.svg',
    description: "If you're a candidate looking to switch jobs, this course is ideal for you. With our expert coaching and practical training, you can learn valuable interview techniques to showcase your skills and experience, and successfully navigate the job search process.",
},
{
    heading: 'Professionals looking to re-join the workforce after a career break',
    imgSrc: 'https://assets-global.website-files.com/64526d2b6aa1e776b5190943/645534da7a9bfb75585a07b5_freelancer%20(1)%201.svg',
    description: 'Learn what the hiring manager is looking for when you re-join after a career break. I will help you justify your career break in the right way. Now, you will be fully prepared to answer questions about your gap in employment and explain why you are returning to work.',
},
];

const SectionWorkshop = () => {
return (
    <div className="section-workshop">
        <div className="container-large-5 w-container">
            <div className="section-heading">
                <h2 className="section-heading_text-2 center">Who is this course for?</h2>
            </div>
            <div className="section-workshop_grid">
            {courseDetails.map((detail, index) => (
                <div key={index} className="section-workshop_item">
                    <div className="section-workshop_item-heading">
                        <h4 className="section-workshop_item-heading_text-2">{detail.heading}</h4>
                        <div className="section-workshop_icon">
                            <img src={detail.imgSrc} loading="lazy" alt={detail.heading} />
                        </div>
                    </div>
                    <p className="paragraph-46">{detail.description}</p>
                </div>
            ))}
            </div>
        </div>
    </div>
);
};

export default SectionWorkshop;
