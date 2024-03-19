import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    projects: [
        {
            id: 1,
            title: 'Personal Website',
            description: "This personal website is crafted using modern web development technologies, including React.js for dynamic and interactive user interfaces, Bootstrap for responsive design and layout, and CSS/HTML for styling and structure. The combination of these technologies ensures a seamless and engaging user experience across different devices and screen sizes.",
            link: "https://github.com/Indeshwar/Inde-profile",
            technologies: ["Designed and developed a professional personal website showcasing skills, projects, and experience using HTML, CSS, and ReactJS",
             "Implemented responsive design and user-friendly navigation for optimal user experience across devices" 
             ]
        },

        {
            id: 2,
            title: 'Student Registration',
            description: 'Student Registration project is a web application designed to streamline class enrollment for students while offering comprehensive class management tools for professors. Leveraging JWT Token-based authorization and role-based user authentication, the system ensures secure access and personalized experiences. Students can effortlessly register for classes, selecting specific professors and viewing all registered courses and associated instructors. On the other hand, professors have robust capabilities to create, update, and manage classes, including defining course details and monitoring enrollment. With personalized dashboards, users can access their profiles, manage personal information, and view roles and permissions.',
            link: "https://github.com/Indeshwar/Student_Registration",
            technologies: ['Developed a comprehensive web application for class enrollment and management, enabling students to register for classes with specific professors and view registered courses and associated instructors', 'Implemented JWT Token-based authorization and user authentication, ensuring secure access and personalized experiences based on roles and permissions', 'Utilized Java, Spring Boot, ReactJS, MySQL, Maven, Docker, HTML, CSS, and Git to build and deploy the application, following Agile development methodologies']
        }
    ],

    skills: [
        {
            id: 1,
            title: 'Programming Language',
            name:['java', 'python'],

        },
        
        {
            id: 2,
            title: 'Database',
            name:['MySQL', 'PostGres', 'MongoDB']
        },

        {
            id: 3,
            title: 'IDEs',
            name:['Intelij', 'Eclipse']
        },

        {
            id: 4,
            title: 'Cloud Technologies',
            name:['Google Cloud Platform', 'Amazon Web Services']
        },

        {
            id: 5,
            title: 'Frameworks',
            name:['Spring Boot', 'Hibernate', 'Spring Data JPA']
        },

        {
            id: 6,
            title: 'Version Control',
            name:['Git', 'GitHub']
        },

        {
            id: 7,
            title: 'CI/CD',
            name:['Jenkins']
        },

        {
            id: 8,
            title: 'Code Qaulity and Testing',
            name:['SonarQube', 'Junit Test']
        },

        {
            id: 9,
            title: 'Container',
            name:['Docker']
        },

        {
            id: 10,
            title: 'Orchestration',
            name:['Kubernetes']
        },
        
    ]
}
export const showSlice = createSlice({
    name: 'show',
    initialState,

    reducers: {
        handleShowOffcanvas: (state)=>{
            state.value=true
            console.log("true")

        },

        handleCloseOffcanvas: (state)=>{
           state.value = false
           console.log("false")
        }
    }
})

export const {handleShowOffcanvas, handleCloseOffcanvas} = showSlice.actions;
export default showSlice.reducer;