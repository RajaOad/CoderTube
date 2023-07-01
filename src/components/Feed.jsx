import { Box, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { SideBar, Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);
  

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>

      <Box sx={{height: { sx: 'auto', md: '86vh' }, px: { sx: 0, md: 2 }}}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className='copyright' variant='body2' fontWeight="bold" sx={{ mt: 1.5, color: 'black'}}>
          Copyright 2023 RajTube
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '82vh', flex: 2 }}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'black' }}>
          {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
      
    </Stack>
  )
}

export default Feed