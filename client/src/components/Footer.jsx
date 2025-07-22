import { Box, Grid, Typography, Link as MuiLink, Divider } from "@mui/material";
import Logo from "../assets/images/Logo/Insights_Logo.png";

// Footer component: site-wide footer containing navigation, contact info, legal links, and disclaimers
const Footer = () => {
  return (
    <Box
      id="footer"
      component="footer" 
      aria-label="Website footer with navigation and contact information" 
      sx={{
        backgroundColor: "#FAF9F7",
        color: "#3A3A3A",
        mt: 8,
        px: { xs: 2, md: 8 },
        py: 6,
      }}
    >
      {/* Top Row: logo + navigation columns */}
      <Grid container spacing={4} justifyContent="space-between">
        {/* Logo section */}
        <Grid item xs={12} md={3}>
          <Box
            component="img"
            src={Logo}
            alt="Insights Christian Counseling Logo" 
            sx={{
              width: { xs: 160, sm: 200, md: 260 }, // Responsive sizing
              height: "auto",
            }}
          />
        </Grid>

        {/* Navigation Columns */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {/* Contact Info Column */}
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2">
                Insights Christian Counseling
              </Typography>
              <MuiLink
                href="https://www.google.com/maps/search/?api=1&query=123+Wellness+St,+Springfield,+ST+12345"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="inherit"
                variant="body2"
                aria-label="View location on Google Maps"
              >
                240B Courthouse Rd.
                <br /> Gulfport, MS 39507
              </MuiLink>

              <Typography variant="body2" gutterBottom>
                <MuiLink
                  href="tel:12283433432"
                  underline="hover"
                  color="inherit"
                  aria-label="Call (228) 343-3432"
                >
                  (228) 343-3432
                </MuiLink>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <MuiLink
                  href="tel:12285674612"
                  underline="hover"
                  color="inherit"
                  aria-label="Call (228) 567-4612" 
                >
                  (228) 567-4612
                </MuiLink>
              </Typography>
            </Grid>

            {/* Explore Links Column */}
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Explore
              </Typography>
              <MuiLink href="/" underline="hover" color="inherit">Home</MuiLink><br />
              <MuiLink href="/about" underline="hover" color="inherit">About</MuiLink><br />
              <MuiLink href="/#resources" underline="hover" color="inherit">Resources</MuiLink><br />
              {/* <MuiLink href="/blog" underline="hover" color="inherit">Blog</MuiLink><br /> */}
              <MuiLink href="/#contact" underline="hover" color="inherit">Contact</MuiLink>
            </Grid>

            {/* Support Links Column */}
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Support
              </Typography>
              <MuiLink
                href="/about#first-appointment"
                underline="hover"
                color="inherit"
              >
                New Patients
              </MuiLink><br />
              <MuiLink
                href="/about#insurance"
                underline="hover"
                color="inherit"
              >
                Billing & Insurance
              </MuiLink>
            </Grid>

            {/* Legal Links Column */}
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Legal
              </Typography>
              <MuiLink
                href="/privacy-practices.pdf"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="inherit"
                aria-label="Download Privacy Practices PDF" 
              >
                Privacy Practices
              </MuiLink><br />
              <MuiLink
                href="https://www.cms.gov/nosurprises"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="inherit"
                aria-label="View No Surprises Act information on CMS website" 
              >
                No Surprises Act
              </MuiLink>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Divider */}
      <Box my={4}>
        <Divider sx={{ backgroundColor: "#D3E3DC" }} />
      </Box>

      {/* Disclaimers Section */}
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          textAlign: "center",
          fontSize: "0.85rem",
        }}
      >
        <Typography variant="body2" paragraph>
          Do not submit Protected Health Information (PHI) through this site.
          Secure messaging is available via your client portal.
        </Typography>
        <Typography variant="body2" paragraph>
          If you are experiencing a mental health emergency, please call 911 or
          go to your nearest emergency room.
        </Typography>
      </Box>

      {/* Copyright */}
      <Box mt={4} textAlign="center">
        <Typography variant="caption">
          © {new Date().getFullYear()} Insights Christian Counseling. All
          rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;