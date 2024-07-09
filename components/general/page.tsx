import React from "react"
import './general.css'
const TestiHeading = () => {
    return (
        <section  className="section_testimonials">
            <div className="padding-global">
                <div className="container-large">
                    <div className="testimonials_heading-wrapper">
                        <h2>Burning Jobs</h2>
                        <div className="find-banner-text text-weight-normal">A brand of <strong>Exemplar Global Resources Pvt Ltd</strong></div>
                    </div>
                </div>
                <div className="impact_stats-wrapper">
                    <div className="impact_stats-card">
                        <div className="gold-gradient">13+</div>
                        <p className="text-size-small">years experience in recruitment</p>
                    </div>
                    <div className="impact_stats-card">
                        <div className="gold-gradient">Strong</div>
                        <p className="text-size-small">Network and Personal Database</p>
                    </div>
                    <div className="impact_stats-card">
                        <div className="gold-gradient">1000+</div>
                        <p className="text-size-small">CANDIDATES are Placed at Top Companies</p>
                    </div>
                </div>
                <div className="testimonials_heading-wrapper">
                    <div className="find-banner-text text-weight-normal">For all latest Job Postings <strong>follow us on Instagram</strong></div>
                    <div className="find-banner-text text-weight-normal"><a href="https://www.instagram.com/burningjobs/" target="_blank" style={{color:'#7a380d'}}><strong>@burningjobs</strong></a></div>
                    
                </div>
            </div>
            
        </section>
    )
}

export default TestiHeading