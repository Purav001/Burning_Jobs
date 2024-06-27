import React from 'react';
import './features.css'; // Make sure to create and import the corresponding CSS file for styles
import FindCard from './FindCard'

const FindSection = () => {
  return (
        <section className="section-find">
        <div className="padding-global">
            <div className="container-large">
            <div className="find-wrapper">
                <div className="find-heading-wrapper">
                <h2>Let's Find What We're Offering To You</h2>
                <div className="find-banner-text">One Step Closer to Landing Your Dream Job</div>
                </div>
                <div className="find-card-container">
                <FindCard
                    heading="Interview Preparation"
                    text="Ace your interviews with expert guidance and tailored strategies for confident, successful outcomes."
                    icon={(
                    <svg width="101" height="100" viewBox="0 0 101 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.666992" width="100" height="100" rx="24" fill="url(#paint0_linear_109_586)" />
                        <rect x="0.666992" width="100" height="100" rx="24" fill="url(#paint1_linear_109_586)" />
                        <defs>
                        <linearGradient id="paint0_linear_109_586" x1="50.667" y1="0" x2="50.667" y2="100" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF5C01" />
                            <stop offset="1" stopColor="#FF026D" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_109_586" x1="50.667" y1="0" x2="50.667" y2="100" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#FF5C01" />
                            <stop offset="1" stopColor="#FF026D" />
                        </linearGradient>
                        </defs>
                    </svg>
                    )}
                />
                {/* Add more FindCard components here as needed */}
                </div>
            </div>
            </div>
        </div>
        </section>
  );
};

export default FindSection;
