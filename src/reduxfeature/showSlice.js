import { createSlice } from "@reduxjs/toolkit";
export const showSlice = createSlice({
    name: 'show',
    initialState: {
        value: false,
    },

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