// I worked on this code as part of a coding bootcamp curriculum. I followed along with the instructions 
// (i.e. followed/copied instructions from the course/instructors and didn't design everything from scratch myself) while
//  writing code in this project/file. Moreover, I  acknowledge receiving support from and/or working/collaborating
//   with instructors/classmates, generally as is expected from being a participant in the coding bootcamp.

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setCurrentUser: (state, action) => {
            return {
                ...state,
                currentUser: action.payload    // actions are objects, they have 1 mandatory prop named type, and 1 optional prop called payload
            }

        }
    }
})

export const userReducer = userSlice.reducer

export const { setCurrentUser } = userSlice.actions

export const selectCurrentUser = (state) => {
    return state.user.currentUser;  // returns what current user is logged in
}