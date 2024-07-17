import React from 'react';
import './ip.css'

const Summary = () => {
return (
    <div className="section-learn">
        <div className="container-large-5 w-container">
            <div className="section-heading">
            <h2 className="section-heading_text-2 center">What are you going to learn?</h2>
            </div>
            
            <div className="learn-grid">
            <div className="learn-grid_left-2">
                <h3 className="learn-heading">How to present yourself for the interview for the perfect first impression?</h3>
                <p className="paragraph-46">
                If you fail to correctly answer the very first interview question “Tell me about yourself”, you will lose your chances of securing your dream job. 
                In this course, I will teach you the right technique to kick start your interview and how to leave that lasting impression on the interviewer. 
                You will learn how to tackle this question with the help of 10+ sample answers. 
                Whether you are a fresher or a working professional, you will get hold of the right strategy to impress the recruiter and stand out from the crowd.
                </p>
            </div>
            <div className="learn-grid_img-wrapper first"></div>
            </div>
            
            <div className="learn-grid_two">
            <div className="learn-grid_two-left"></div>
            <div className="learn-grid_two-right">
                <h3 className="learn-heading">Optimize Your LinkedIn Profile for Maximum Visibility</h3>
                <p className="paragraph-46">
                <br/>
                Learn how to craft a compelling LinkedIn profile that stands out to recruiters and potential employers. This course will guide you through optimizing every section of your profile, from writing a powerful headline and summary to highlighting key skills and experiences. By implementing these strategies, you'll increase your profile's visibility and attract more professional opportunities.
                <br/>
                </p>
            </div>
            </div>
            
            <div className="learn-grid">
            <div className="learn-grid_left-2">
                <h3 className="learn-heading">Craft an ATS-Friendly Resume that Passes Screening Algorithms</h3>
                <div>
                <p className="paragraph-46">
                    <br/>
                Understand the intricacies of Applicant Tracking Systems (ATS) and learn how to create a resume that successfully passes automated screening processes. This course will teach you how to structure your resume, choose the right keywords, and format your document to ensure it gets noticed by both ATS algorithms and hiring managers. Enhance your chances of landing an interview by building a resume that stands out in the digital hiring landscape.
                <br/>
                </p>
                </div>
            </div>
            <div className="learn-grid_img-wrapper first sec"></div>
            </div>
            
        </div>
    </div>
);
};

export default Summary;
