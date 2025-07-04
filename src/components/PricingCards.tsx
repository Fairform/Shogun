import { Card, CardContent, Typography, Button, Box, Chip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

export default function PricingCard({ 
  title, 
  price, 
  period, 
  features, 
  isPopular = false, 
  ctaText 
}: {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}) {
  return (
    <Card sx={{ 
      height: '100%',
      border: isPopular ? '2px solid' : '1px solid',
      borderColor: isPopular ? 'secondary.main' : 'divider',
      boxShadow: isPopular ? 3 : 0,
      position: 'relative',
    }}>
      {isPopular && (
        <Chip 
          label="MOST POPULAR" 
          color="secondary" 
          sx={{ 
            position: 'absolute', 
            top: -12, 
            right: 20,
            fontWeight: 'bold'
          }} 
        />
      )}
      
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        
        <Box sx={{ my: 2 }}>
          <Typography variant="h4" component="div">
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            per {period}
          </Typography>
        </Box>
        
        <Box component="ul" sx={{ pl: 0, listStyle: 'none', my: 3 }}>
          {features.map((feature, index) => (
            <Box 
              key={index} 
              component="li" 
              sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}
            >
              <CheckIcon color="success" sx={{ mr: 1.5 }} />
              <Typography variant="body1">{feature}</Typography>
            </Box>
          ))}
        </Box>
        
        <Button 
          variant={isPopular ? 'contained' : 'outlined'} 
          color={isPopular ? 'secondary' : 'primary'}
          fullWidth
          size="large"
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
}