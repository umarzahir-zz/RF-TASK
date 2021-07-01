import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    jobs:[]
  },
  reducers: {
    addJob: (state, action) => {
      const {step1, step2, step3} = action.payload
      // console.log(action)
      const job = {
        lookingFor: step1.lookingFor, experience: step1.experience,  education: step1.education,  skills: step1.skills, description: step1.description,
        hourlyRate: step2.hourlyRate, careerLevel: step2.careerLevel,  satrtDate: step2.satrtDate,  gender: step2.gender, equiqSpecification: step2.equiqSpecification,
        selectedDays: [...step3.days], selectedTimes: [...step3.daysTime]
      }

      console.log(job)
      state.jobs.push(job)
     
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { addJob, decrement, incrementByAmount } = formSlice.actions

export default formSlice.reducer