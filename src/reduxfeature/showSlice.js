import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    projects: [
        {
            id: 1,
            title: 'Personal Website',
            description: "This personal website is crafted using modern web development technologies, including React.js for dynamic and interactive user interfaces, Bootstrap for responsive design and layout, and CSS/HTML for styling and structure. The combination of these technologies ensures a seamless and engaging user experience across different devices and screen sizes.",
            link: "https://github.com/Indeshwar/Inde-profile"
        },

        {
            id: 2,
            title: 'School Website',
            description: 'Website for School',
            link: "https://github.com/Indeshwar/Inde-profile"
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