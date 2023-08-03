// CardComponent.tsx
import React, { ReactNode } from 'react';
import './styles.css';
import { Card, CardContent, CardMedia, CardHeader } from '@mui/material';
import { grey } from '@mui/material/colors';

type CardComponentProps = {
  children: ReactNode;
};

const CardComponent: React.FC<CardComponentProps> = ({ children }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345,borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                },               
            }}
  >
        {children}
      </Card>
    </>
  );
};

export default CardComponent;
