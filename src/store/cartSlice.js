import {createSlice} from '@reduxjs/toolkit'


const cartSlice = createSlice({
 name: 'cart',
 initialState : [],
 reducers: {
    // Add item into cart 
    add(state,action){
        // Old version was like this , but in new version we can direct push the value but internally redux use old version to update state.
        // return [...state, action.paylaod]
        state.push(action.payload);
    },

    // Remove item from cart 
    remove(state,action){
        return state.filter((item)=> item.id !== action.payload)
    }
 }

});

export const {add, remove} = cartSlice.actions
export default cartSlice.reducer; 


