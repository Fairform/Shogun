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
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)'
      }
    }}>
      {isPopular && (
        <Chip 
          label="MOST POPULAR" 
          color="secondary" 
          sx={{ 
            position: 'absolute', 
            top: -12, 
            right: 20,
            fontWeight: 'bold',
            fontSize: '0.75rem'
          }} 
        />
      )}
      
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h5" component="div" gutterBottom fontWeight={700}>
          {title}
        </Typography>
        
        <Box sx={{ my: 2 }}>
          <Typography variant="h3" component="div" fontWeight={800}>
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
              sx={{ display: 'flex', alignItems: 'flex-start', mb: 1.5 }}
            >
              <CheckIcon color="success" sx={{ mr: 1.5, mt: 0.5 }} />
              <Typography variant="body1">{feature}</Typography>
            </Box>
          ))}
        </Box>
        
        <Button 
          variant={isPopular ? 'contained' : 'outlined'} 
          color={isPopular ? 'secondary' : 'primary'}
          fullWidth
          size="large"
          sx={{ py: 1.5, fontWeight: 600 }}
        >
          {ctaText}
        </Button>
      </CardContent>
    </Card>
  );
}