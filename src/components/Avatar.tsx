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
        display: 'flex',               // Use flexbox to center the Avatar
        justifyContent: 'center', 
      }
    }>
      <Avatar
            alt={name}
            src={image}
            sx={{ width: 100, height: 100, textAlign:'center'}}
        />
    </CardMedia>
     
    </>
  )
}

export default AvatarComponent