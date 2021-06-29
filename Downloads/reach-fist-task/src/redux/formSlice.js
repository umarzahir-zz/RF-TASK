import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    lookingFor: "", experience: "", education: "", skills: "", description: ""
  },
  reducers: {
    addStepOneData: (state, action) => {
      state.lookingFor  = action.lookingFor;
      state.experience  = action.experience;
      state.education   = action.education;
      state.skills      = action.skills;
      state.description = action.description
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { addStepOneData, decrement, incrementByAmount } = formSlice.actions

export default formSlice.reducer