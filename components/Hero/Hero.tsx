'use client'
import React from "react";
import './hero.css'
const Hero = () => {
    return(
        <div className="pos">
        <aside className="section_hero">
            <div className="padding-global">
                <div className="container-large">
                    <div className="hero_wrapper">
                        <div className="hero_content-wrapper">
                            <div className="hero_heading-wrapper">
                                <div className="banner_wrapper">
                                    <div>Most Followed <strong>Interview Coach</strong>
                                </div>
                            </div>
                            <h1>“I am committed to building your career and <span className="text-color-yellow">amplifying your Career growth.</span>” - Diksha Arora</h1>
                            </div>
                            <p className="text-color-white">Our Results Speak For Us</p>
                            <div className="hero_button-wrapper">
                                <a href="#Services" className="button w-button">Unlock Your Career Potential Today!</a>
                            </div>
                        </div>
                        <div className="hero_image-wrapper image">
                            <img src="https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4976b28938b4cb4fdc99b_diksha-banner-image.webp" loading="eager" sizes="(max-width: 767px) 92vw, (max-width: 991px) 600px, 100vw" width="746" alt="" srcSet="https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4976b28938b4cb4fdc99b_diksha-banner-image-p-500.webp 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4976b28938b4cb4fdc99b_diksha-banner-image-p-800.webp 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4976b28938b4cb4fdc99b_diksha-banner-image-p-1080.webp 1080w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4976b28938b4cb4fdc99b_diksha-banner-image.webp 1492w" className="image-2" />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
        </div>
    );
};

export default Hero;