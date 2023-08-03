import React from 'react';
import './styles.css';
import { Avatar, CardContent, CardMedia } from '@mui/material';
import { relative } from 'path';

type User = {
  name: string,
  image: string
}


const AvatarComponent:React.FC<User> = ({name, image}) => {
  return (
    <>
    <CardMedia sx={
      {
        paddingTop:'10%',
        display: 'flex',              
        justifyContent: 'center', 
        backgroundColor: '#2e79db'
        
      }}
      
      
      >
      <Avatar
            alt={name}
            src={image}
            sx={{ width: 120, height: 120, textAlign:'center'}}
        />
    </CardMedia>
     
    </>
  )
}

export default AvatarComponent