import { Container, Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Slider, Checkbox, FormControlLabel } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function GeneratePage() {
  return (
    <>
      <Header />
      
      <Container maxWidth="md" sx={{ py: 10 }}>
        <Typography variant="h2" align="center" mb={4}>
          Generate Your Policy Pack
        </Typography>
        
        <Box component="form" sx={{ 
          backgroundColor: 'background.paper', 
          borderRadius: 2, 
          p: 4, 
          boxShadow: 3 
        }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Company Name"
                variant="outlined"
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="ABN (Optional)"
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Trading Name"
                variant="outlined"
              />
            </Grid>
            
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>State</InputLabel>
                <Select label="State">
                  <MenuItem value="nsw">NSW</MenuItem>
                  <MenuItem value="vic">VIC</MenuItem>
                  <MenuItem value="qld">QLD</MenuItem>
                  <MenuItem value="wa">WA</MenuItem>
                  <MenuItem value="sa">SA</MenuItem>
                  <MenuItem value="tas">TAS</MenuItem>
                  <MenuItem value="nt">NT</MenuItem>
                  <MenuItem value="act">ACT</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            
            <Grid item xs={12}>
              <Typography gutterBottom>Number of Staff</Typography>
              <Slider
                defaultValue={5}
                step={1}
                marks
                min={1}
                max={50}
                valueLabelDisplay="auto"
              />
            </Grid>
            
            <Grid item xs={12}>
              <Typography gutterBottom>Service Types</Typography>
              <FormControlLabel control={<Checkbox />} label="Support Coordination" />
              <FormControlLabel control={<Checkbox />} label="Therapeutic Supports" />
              <FormControlLabel control={<Checkbox />} label="Assistive Technology" />
            </Grid>
            
            <Grid item xs={12}>
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                fullWidth
                sx={{ py: 2, mt: 2 }}
              >
                Generate My Policy Pack
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      
      <Footer />
    </>
  );
}
