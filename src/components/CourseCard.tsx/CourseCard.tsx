import {
   Box,
   CardActionArea,
   CardContent,
   Divider,
   Skeleton,
   Typography
} from '@mui/material'
import Image from 'components/Image'
import type { Course } from 'types'
import Content from './Content'
import StyledCard from './StyledCard'

interface CourseCardProps {
   course: Course
}

export default function CourseCard({ course }: CourseCardProps) {
   return (
      <StyledCard aria-roledescription="presentation">
         <CardActionArea
            sx={{
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'space-between',
               height: '100%'
            }}
         >
            {course ? (
               <Image skeleton src={course.imageurl} alt="alt text" />
            ) : (
               <Skeleton variant="rectangular" width="100%" height={335} />
            )}

            <CardContent sx={{ width: '100%' }}>
               <Box mt={1}>
                  <Typography variant="subtitle1" color="gray">
                     {course ? course.readTime : <Skeleton />}
                  </Typography>

                  <Typography variant="h5">
                     {course ? course.title : <Skeleton />}
                  </Typography>
               </Box>

               {course && <Divider sx={{ my: 1 }} />}

               <Box mt={1}>
                  {course ? (
                     <Content text={course.content} />
                  ) : (
                     <Skeleton variant="rectangular" height={120} />
                  )}
               </Box>
            </CardContent>
         </CardActionArea>
      </StyledCard>
   )
}
