import bcrypt from 'bcryptjs'

const data = {
    services: [
        {   
            id: 1,
            imageSrc: "/images/services/interview.png",
            imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121-p-500.webp 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121-p-800.webp 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121.webp 902w",
            title: "Ultimate Interview Preparation Course",
            slug: "ultimate-interview",
            description: "Get more than 200 sample answers that will fit any job role. Now, you have well-crafted...",
            link: "This course has been designed to provide both freshers and experience holders with an all-round preparation for acing their job interviews. You will learn all aspects related to job interviews which includes the right technique to open your interview, most frequently asked interview questions and 200+ sample answers that will fit any job role. Most important, learn the exact strategy that you need to negotiate your salary so that you get what is rightfully yours. Once you will complete the course, you will walk into the interview room well prepared to handle any tricky situation. ",
            price: 2000,
        },
        {
            id: 2,
            imageSrc: "/images/services/experienced.png",
            imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121-p-500.webp 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121-p-800.webp 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121.webp 902w",
            title: "ATS Friendly Resume (Experienced)",
            slug: "ats-experienced",
            description: "Resume is the first step to landing your dream job. A recruiter or a talent acquisition...",
            link: "Before a resume reaches the hands of a hiring manager, it often must pass an ATS — Applicant Tracking System. An ATS is a software used by recruiters to collect, sort, scan, and rank the resumes they receive for open positions. Even a well qualified candidate might fail to get an interview call if the resume does not satisfy the ATS. Using the right keywords in the resume as per the job description is essential to have your resume short listed. Since, your resume reaches the recruiter before you, it is essential that your resume is the perfect reflection of your skill set.",
            price: 5499,
        },
        {
            id: 3,
            imageSrc: "/images/services/linkedin.png",
            imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3)-p-500.png 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3)-p-800.png 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3)-p-1080.png 1080w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3).png 1344w",
            title: "LinkedIn Profile Optimisation",
            slug: 'linkedin-profile',
            description: "LinkedIn is the most powerful modern day tool to build a strong Personal Brand and a...",
            link: "LinkedIn is the most powerful modern day tool to build a strong Personal Brand and a strong Professional Network to accelerate career growth. It helps job seekers come in the notice of Recruiters and makes the entire process of job search easier. ",
            price: 4299,
        },
        {
            id: 4,
            imageSrc: "/images/services/freshers.png",
            imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344-p-500.webp 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344-p-800.webp 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344.webp 902w",
            title: "Building A Perfect ATS Friendly Resume (Freshers)",
            slug: "ats-freshers",
            description: "Resume is the first step to landing your dream job. A recruiter or a talent acquisition...",
            link: "Before a resume reaches the hands of a hiring manager, it often must pass an ATS — Applicant Tracking System. An ATS is a software used by recruiters to collect, sort, scan, and rank the resumes they receive for open positions. Even a well qualified candidate might fail to get an interview call if the resume does not satisfy the ATS. Using the right keywords in the resume as per the job description is essential to have your resume short listed. Since, your resume reaches the recruiter before you, it is essential that your resume is the perfect reflection of your skill set.",
            price: 2999,
        },
        {
            id: 5,
            imageSrc: "/images/services/live.png",
            imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121-p-500.webp 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121-p-800.webp 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121.webp 902w",
            title: "Master Program With Live Sessions",
            slug: 'master-program',
            description: "One-One Job Interview Preparation Program target is to ensure that you head confidently for your interview and emerge as a strong potential candidate who is the right fit for the job ",
            link: "The 'Master Program with Live Sessions' is a comprehensive career advancement package designed to help both freshers and experienced professionals excel in their interview process. With personalized coaching from Sunil Kumar, it includes one-on-one interview preparation sessions, mock interview, an ATS-friendly resume and cover letter, LinkedIn profile optimization, and a customized set of interview Q&A tailored to your specific job role. Additionally, you'll receive a downloadable PDF for convenient revision, ensuring you are fully prepared to succeed in your career pursuits.",
            price: 18500,
        },
    ]
}
export default data