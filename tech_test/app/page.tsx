"use client";
import React, { useState, useEffect } from 'react';
import { Typography, Button, Container, Box, Grid } from '@mui/material';
import axios from 'axios';

const HomePage: React.FC = () => {
  const [animalImages, setAnimalImages] = useState<string[]>([]);

  useEffect(() => {
    fetchAnimalImages();
  }, []);

  const fetchAnimalImages = async () => {
    try {
      const response = await axios.get('http://shibe.online/api/shibes?count=5&urls=true&httpsUrls=true');
      setAnimalImages(response.data);
    } catch (error) {
      console.error('Error fetching animal images:', error);
    }
  };

  return (
    <Container>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <Typography variant="h4">Random animal pictures</Typography>
        <Typography variant="body1">Animals are awesome!</Typography>

        <Box display="flex" justifyContent="space-between" mt={3}>
          <Button variant="contained" color="primary" onClick={fetchAnimalImages}>
            Get random animals
          </Button>
        </Box>

        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          {animalImages.map((imageUrl, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <img src={imageUrl} alt={`Animal ${index + 1}`} style={{ width: '100%' }} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default HomePage;