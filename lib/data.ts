import bcrypt from 'bcryptjs'

const data = {
    users: [
        {
            name : 'Sunil',
            email: 'admin@exemplar.com',
            passward: bcrypt.hashSync('EXEzkp321'),
            isAdmin: true,
        },
        {
            name : 'Purav',
            email: 'user@exemplar.com',
            passward: bcrypt.hashSync('123456'),
            isAdmin: false,
        }
    ],
    services: [
        {   
            id: 1,
            imageSrc: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121.webp",
            imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121-p-500.webp 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121-p-800.webp 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c5a0442cfa0e10ec61_Frame121.webp 902w",
            title: "Ultimate Interview Preparation Course",
            description: "Get more than 200 sample answers that will fit any job role. Now, you have well-crafted...",
            link: "/interview"
        },
        {
            id: 2,
            imageSrc: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2).png",
            imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2)-p-500.png 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2)-p-800.png 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2)-p-1080.png 1080w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0b2ccde1577e5e3e63ea_Frame%20(2).png 1344w",
            title: "ATS Friendly Resume (Experienced)",
            description: "Resume is the first step to landing your dream job. A recruiter or a talent acquisition...",
            link: "https://dikshaarora.com/services/resume-building"
        },
        {
            id: 3,
            imageSrc: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3).png",
            imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3)-p-500.png 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3)-p-800.png 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3)-p-1080.png 1080w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64ca0c384fc24b0a1d8a3bc7_Frame%20(3).png 1344w",
            title: "LinkedIn Profile Optimisation",
            description: "LinkedIn is the most powerful modern day tool to build a strong Personal Brand and a...",
            link: "https://dikshaarora.com/web/checkout/641215caf6895898d1ec5619"
        },
        {
            id: 4,
            imageSrc: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344.webp",
            imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344-p-500.webp 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344-p-800.webp 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64c4a7c6434d9807c6eb83de_Frame344.webp 902w",
            title: "Building A Perfect ATS Friendly Resume (Freshers)",
            description: "Resume is the first step to landing your dream job. A recruiter or a talent acquisition...",
            link: "https://dikshaarora.com/services/resume-freshers"
        },
        {
            id: 5,
            imageSrc: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64cb97c693daf9d341895669_Frame.png",
            imageSrcSet: "https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64cb97c693daf9d341895669_Frame-p-500.png 500w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64cb97c693daf9d341895669_Frame-p-800.png 800w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64cb97c693daf9d341895669_Frame-p-1080.png 1080w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64cb97c693daf9d341895669_Frame-p-1600.png 1600w, https://assets-global.website-files.com/64c40ba0d80b7fc4d6b7b4bb/64cb97c693daf9d341895669_Frame.png 1803w",
            title: "Master Program With Live Sessions",
            description: "One-One Job Interview Preparation Program target is to ensure that you head confidently for your interview and emerge as a strong potential candidate who is the right fit for the job ",
            link: "#"
        },
    ]
}
export default data