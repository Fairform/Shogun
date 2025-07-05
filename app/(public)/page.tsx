import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import HeroSection from '../../../components/HeroSection';
import PricingCard from '../../../components/PricingCard';
import { benefits, pricingPlans, testimonials } from '../../../lib/constants';
import { Container, Box, Typography, Button, Grid } from '@mui/material';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      
      {/* Industry Benefits */}
      <Box component="section" py={10} bgcolor="background.default">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" mb={2} fontWeight={700}>
            Industry-Specific Compliance Solutions
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" mb={6}>
            Tailored policy packs for your specific regulatory requirements
          </Typography>
          
          <Grid container spacing={4}>
            {benefits.map((benefit: { icon: React.ReactNode; title: string; description: string }, index: number) => (
              <Grid item xs={12} md={4} key={index} component="div">
                <Box textAlign="center" bgcolor="background.paper" p={4} borderRadius={2} boxShadow={3} height="100%">
                  <Box 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center" 
                    width={80} 
                    height={80} 
                    bgcolor="rgba(23, 121, 186, 0.1)" 
                    borderRadius="50%" 
                    mx="auto"
                    mb={3}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography variant="h6" fontWeight={600} mb={1.5}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {benefit.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* How It Works */}
      <Box component="section" py={10} bgcolor="background.paper">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" mb={2} fontWeight={700}>
            How Fairform Works
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" mb={6}>
            Get audit-ready compliance documents in three simple steps
          </Typography>
          
          <Grid container spacing={4}>
            {[
              { step: 1, title: "Select Your Industry", description: "Choose from our specialized templates for your sector and region" },
              { step: 2, title: "Enter Business Details", description: "Provide your company information and upload your logo" },
              { step: 3, title: "Download Instantly", description: "Receive branded, audit-ready policy packs in DOCX and PDF formats" }
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index} component="div">
                <Box textAlign="center">
                  <Box 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center" 
                    width={80} 
                    height={80} 
                    bgcolor="rgba(23, 121, 186, 0.1)" 
                    borderRadius="50%" 
                    mx="auto"
                    mb={3}
                  >
                    <Typography variant="h4" fontWeight={700} color="primary">
                      {item.step}
                    </Typography>
                  </Box>
                  <Typography variant="h6" fontWeight={600} mb={1.5}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Pricing Section */}
      <Box component="section" py={10} bgcolor="background.default">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" mb={2} fontWeight={700}>
            Simple, Transparent Pricing
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" mb={6}>
            Choose the plan that works for your business
          </Typography>
          
          <Grid container spacing={4}>
            {pricingPlans.map((plan: { title: string; price: string; period: string; features: string[]; isPopular?: boolean; ctaText: string }, index: number) => (
              <Grid item xs={12} md={4} key={index} component="div">
                <PricingCard 
                  title={plan.title}
                  price={plan.price}
                  period={plan.period}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  ctaText={plan.ctaText}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Testimonials */}
      <Box component="section" py={10} bgcolor="background.paper">
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" mb={2} fontWeight={700}>
            Trusted by Australian Businesses
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" mb={6}>
            Hear from professionals who use Fairform
          </Typography>
          
          <Grid container spacing={4}>
            {testimonials.map((testimonial: { quote: string; author: string; role: string }, index: number) => (
              <Grid item xs={12} md={4} key={index} component="div">
                <Box bgcolor="background.paper" p={4} borderRadius={2} boxShadow={3} height="100%">
                  <Typography variant="body1" fontStyle="italic" mb={3}>
                    "{testimonial.quote}"
                  </Typography>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {testimonial.author}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      
      {/* Final CTA */}
      <Box component="section" py={10} bgcolor="background.default">
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" mb={2} fontWeight={700}>
            Start generating your policy pack today
          </Typography>
          <Typography variant="body1" align="center" color="text.secondary" mb={4}>
            Join thousands of Australian businesses using Fairform for compliance
          </Typography>
          <Box textAlign="center">
            <Button 
              variant="contained" 
              color="primary" 
              size="large"
              href="/generate"
              sx={{ py: 2, px: 6, fontSize: '1.1rem', fontWeight: 600 }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>
      
      <Footer />
    </>
  );
}