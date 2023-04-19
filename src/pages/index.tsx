import Typography from '@mui/material/Typography'
import { Box } from '@mui/material'
import Domain from '../component/Domain'; 

export default function Home() {

  return (
    <>
      <Box p={6}>
        <Typography variant="h3" color="initial">환영합니다</Typography>
        {/* 유저가 접근할 수 있는 컨테이너 웹페이지 목록 */}
        <Domain></Domain>
      </Box>
    </>
  )
}
