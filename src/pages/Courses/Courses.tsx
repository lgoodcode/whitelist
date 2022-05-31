import { Box, Container, Grid, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import {
   fetchCourses,
   selectCourses,
   selectCoursesStatus
} from 'app/reducers/courses/coursesSlice'
import CourseCard from 'components/CourseCard.tsx'
import MyDivider from 'components/MyDivider'
import { Section } from 'components/Section'
import { useEffect } from 'react'

export default function CoursesPage() {
   const dispatch = useAppDispatch()
   // Load products into state on app load to cache
   const coursesStatus = useAppSelector(selectCoursesStatus)
   const status = useAppSelector(selectCoursesStatus)
   const courses = useAppSelector(selectCourses)
   const loading = status === 'pending'

   useEffect(() => {
      if (coursesStatus === 'pending') {
         dispatch(fetchCourses())
      }
   }, [coursesStatus, dispatch])

   if (status === 'error') {
      return (
         <Section>
            <Container>
               <Box mt={{ md: 4, lg: 8 }} display="flex" justifyContent="center">
                  <Typography variant="h4">Oops! An error occurred.</Typography>
               </Box>
            </Container>
         </Section>
      )
   }

   const content =
      !loading && courses.length === 0 ? (
         <Box minHeight="100%" width="100%">
            <Typography>Failed to retrieve courses.</Typography>
         </Box>
      ) : (
         <Grid container rowSpacing={{ xs: 8, md: 6 }} columnSpacing={{ xs: 0, md: 6 }}>
            {(loading ? Array.from(new Array(3)) : courses).map((course, i) => (
               <Grid item key={course?.id || i} xs={12} md={4} mx="auto">
                  <CourseCard course={course} />
               </Grid>
            ))}
         </Grid>
      )

   return (
      <Section>
         <Container>
            <Box
               mt={{
                  md: 4,
                  lg: 8
               }}
               display="flex"
               width="auto"
               maxWidth={300}
            >
               <MyDivider
                  boxProps={{
                     mr: 2
                  }}
                  dividerProps={{
                     orientation: 'vertical',
                     sx: {
                        borderRightWidth: 'thick'
                     }
                  }}
               />

               <Typography variant="h3" fontFamily="Titillium Web">
                  Courses
               </Typography>
            </Box>
            {/* TODO: add filtering and sorting */}
            <Box></Box>
            <Box mt={6}>{content}</Box>
         </Container>
      </Section>
   )
}
