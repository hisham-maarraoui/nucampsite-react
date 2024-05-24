
// I worked on this code as part of a coding bootcamp curriculum. I followed along with the instructions 
// (i.e. followed/copied instructions from the course/instructors and didn't design everything from scratch myself) while
//  writing code in this project/file. Moreover, I  acknowledge receiving support from and/or working/collaborating
//   with instructors/classmates, generally as is expected from being a participant in the coding bootcamp.


import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// import { PARTNERS } from '../../app/shared/oldData/PARTNERS';

import { baseUrl } from '../../app/shared/baseUrl';

import { mapImageURL } from '../../utils/mapImageURL';




export const fetchPartners = createAsyncThunk(
    'partners/fetchPartners',
    async () => {
        const response = await fetch(baseUrl + 'partners');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);


const initialState = {
    partnersArray: [],
    isLoading: true,
    errMsg: ''
};

const partnersSlice = createSlice({
    name: 'partners',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchPartners.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchPartners.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.partnersArray = mapImageURL(action.payload);
        },
        [fetchPartners.rejected]: (state, action) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) => {
    return state.partners.partnersArray;
};


export const selectFeaturedPartner = (state) => {
    return {
        featuredItem: state.partners.partnersArray.find(
            (partner) => partner.featured
        ),
        isLoading: state.partners.isLoading,
        errMsg: state.partners.errMsg
    };
};




