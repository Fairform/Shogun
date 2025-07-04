import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import PricingCard from '@/components/PricingCard';
import { Container, Grid, Box, Typography, Card, CardContent } from '@mui/material';
import { benefits, pricingPlans, testimonials } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <Header />
      
      <HeroSection />
      
      {/* Industry Benefits */}
      <Box component="section" py={10} bgcolor="background.default">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" mb={2}>
            Industry-Specific Compliance Solutions
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" mb={6}>
            Tailored policy packs for your specific regulatory requirements
          </Typography>
          
          <Grid container spacing={4}>
            {benefits.map((benefit, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', p: 3, textAlign: 'center' }}>
                  <Box sx={{ 
                    width: 80, 
                    height: 80, 
                    bgcolor: 'rgba(23, 121, 186, 0.1)', 
                    borderRadius: '50%', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3
                  }}>
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Pricing Section */}
      <Box component="section" py={10} bgcolor="background.paper">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" mb={2}>
            Simple, Transparent Pricing
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" mb={6}>
            Choose the plan that works for your business
          </Typography>
          
          <Grid container spacing={4}>
            {pricingPlans.map((plan, index) => (
              <Grid item xs={12} md={4} key={index}>
                <PricingCard {...plan} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      <Footer />
    </>
  );
}