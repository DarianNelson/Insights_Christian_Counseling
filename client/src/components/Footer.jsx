import { Box, Grid, Typography, Link as MuiLink, Divider } from "@mui/material";
import Logo from "../assets/images/Logo/Insights_Logo.PNG";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FAF9F7",
        color: "#3A3A3A",
        mt: 8,
        px: { xs: 2, md: 8 },
        py: 6,
      }}
    >
      {/* Top Row */}
      <Grid container spacing={4} justifyContent="space-between">
        {/* Logo */}
        <Grid item xs={12} md={3}>
          <Box
            component="img"
            src={Logo}
            alt="Insights Christian Counseling Logo"
            sx={{
              width: { xs: 160, sm: 200, md: 260 }, // adjusts size by screen width
              height: "auto",
            }}
          />
        </Grid>

        {/* Footer Sections */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={4}>
            {/* Contact Info */}
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Contact
              </Typography>
              <Typography variant="body2">
                Insights Christian Counseling
              </Typography>
              <Typography variant="body2">
                123 Wellness St.
                <br />
                Springfield, ST 12345
              </Typography>
              <Typography variant="body2">(123) 456-7890</Typography>
            </Grid>

            {/* Explore */}
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Explore
              </Typography>
              <MuiLink href="/" underline="hover" color="inherit">
                Home
              </MuiLink>
              <br />
              <MuiLink href="/about" underline="hover" color="inherit">
                About
              </MuiLink>
              <br />
              <MuiLink href="/resources" underline="hover" color="inherit">
                Resources
              </MuiLink>
              <br />
              <MuiLink href="/blog" underline="hover" color="inherit">
                Blog
              </MuiLink>
              <br />
              <MuiLink href="/contact" underline="hover" color="inherit">
                Contact
              </MuiLink>
            </Grid>

            {/* Support */}
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Support
              </Typography>
              <MuiLink href="/new-patients" underline="hover" color="inherit">
                New Patients
              </MuiLink>
              <br />
              <MuiLink href="/insurance" underline="hover" color="inherit">
                Insurance
              </MuiLink>
              <br />
              <MuiLink href="/help" underline="hover" color="inherit">
                Help & Resources
              </MuiLink>
            </Grid>

            {/* Legal */}
            <Grid item xs={6} md={3}>
              <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                Legal
              </Typography>
              <MuiLink href="/privacy" underline="hover" color="inherit">
                Privacy Practices
              </MuiLink>
              <br />
              <MuiLink href="/no-surprises" underline="hover" color="inherit">
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

      {/* Disclaimers */}
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
