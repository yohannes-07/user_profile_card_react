import React from 'react';
import './styles.css';
import {Card, CardContent, CardActions, Link, Typography } from '@mui/material'

type Props = {
    name: string,
    bio: string,
    website?: string,
    email: string
}

const Info:React.FC<Props> = ({name, bio, website,email}) => {
  return (
    <>
    <CardContent 
      sx={{
        margin:'10%',
        
      }}
    >
        <Typography sx={{
             textAlign:'center'}} variant='h6'>
            {name}
          </Typography>

        <Typography sx={{
            textAlign:'center',
            marginTop:'5%'
          }} 
            variant="body2"
            >
            {bio}
        </Typography>

      </CardContent>   

      <CardActions 
          sx={{
            paddingLeft:'30%'
          }}
        >
          {
            website ? (<Link variant='button'  underline="hover" href={website} >website</Link>) : undefined
          }
          <Link variant='button' underline="hover" href={email} >email</Link>
      </CardActions>

         
    </>
  )
}

export default Info