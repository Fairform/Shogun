import { Box, Container, Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { industries } from '../../lib/constants';

export default function HeroSection() {
  const [industry, setIndustry] = useState('');

  return (
    <Box sx={{
      pt: { xs: 15, md: 20 },
      pb: 10,
      background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,255,255,0.9))',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <Container maxWidth="md" sx={{ px: 3, textAlign: 'center' }}>
        <Typography variant="h2" fontWeight={700} mb={3}>
          Generate your compliance policy pack in <span style={{ color: '#1779ba' }}>60 seconds</span>
        </Typography>
        <Typography variant="h6" color="text.secondary" mb={5}>
          Trusted by sole traders, NDIS providers, coaches, and more across Australia
        </Typography>
        
        <Box sx={{ 
          backgroundColor: 'background.paper', 
          borderRadius: 2, 
          p: 3, 
          boxShadow: 3,
          maxWidth: 600,
          mx: 'auto',
          textAlign: 'left'
        }}>
          <FormControl fullWidth sx={{ mb: 3 }}>
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