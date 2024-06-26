import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name : 'app',
  initialState : {
    isMenuOpen : true
  },
  reducers : {
    toogleMenu : (state,action) =>{
      state.isMenuOpen = !state.isMenuOpen
    },
    closeMenu : (state,action) =>{
      state.isMenuOpen = action.payload
    }
  }
})

export const{toogleMenu,closeMenu} = appSlice.actions;
export default appSlice.reducer