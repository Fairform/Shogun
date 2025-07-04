import { Box, Container, Typography, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { industries } from '@/lib/constants';

export default function HeroSection() {
  const [industry, setIndustry] = useState('');

  return (
    <Box sx={{
      pt: { xs: 15, md: 20 },
      pb: 10,
      background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(https://images.unsplash.com/photo-1454165804606-c3d57bc86b40)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Container maxWidth="md" sx={{ px: 3 }}>
        <Typography variant="h1" align="center" gutterBottom>
          Generate your compliance policy pack in <span style={{ color: '#1779ba' }}>60 seconds</span>
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" mb={4}>
          Trusted by sole traders, NDIS providers, coaches, and more across Australia
        </Typography>
        
        <Box sx={{ 
          backgroundColor: 'background.paper', 
          borderRadius: 2, 
          p: 3, 
          boxShadow: 3,
          maxWidth: 600,
          mx: 'auto'
        }}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Select your industry</InputLabel>
            <Select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              label="Select your industry"
            >
              {industries.map((ind) => (
                <MenuItem key={ind.id} value={ind.id}>{ind.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          
          <Link href={industry ? `/generate?industry=${industry}` : '#'} passHref>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth 
              size="large"
              disabled={!industry}
              sx={{ py: 1.5 }}
            >
              Continue
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}