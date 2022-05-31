import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { get } from 'app/api'
import type { RootState } from '../../store'
import type { Course } from 'types'

export interface CoursesState {
   courses: Course[]
   status: 'pending' | 'fulfilled' | 'error'
   error: string
}

const initialState: CoursesState = {
   courses: [],
   status: 'pending',
   error: ''
}

export const fetchCourses = createAsyncThunk('products/fetchCourses', async () => {
   try {
      return (await get<Course[]>('/courses')).data
   } catch (err) {
      console.error(err)
      return [] as Course[]
   }
})

export const coursesSlice = createSlice({
   name: 'courses',
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(fetchCourses.pending, (state) => {
            state.status = 'pending'
         })
         .addCase(fetchCourses.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.courses = action.payload
         })
         .addCase(fetchCourses.rejected, (state) => {
            state.status = 'error'
            state.error = 'Failed to retrieve courses'
         })
   }
})

export const selectCoursesStatus = (state: RootState) => state.courses.status

export const selectCourses = (state: RootState) => state.courses.courses

export const selectCoursetById = (id: Course['id']) => (state: RootState) =>
   state.courses.courses.find((course) => course.id === id)

export default coursesSlice.reducer
