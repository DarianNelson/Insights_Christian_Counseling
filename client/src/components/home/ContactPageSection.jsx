import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  Card,
  CardContent,
} from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import HushmailForm from "../contact/HushmailForm";

const ContactSection = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Insights+Christian+Counseling/@30.3819389,-89.0462734,17z/data=!4m15...";
  const appleMapsUrl =
    "https://maps.apple.com/?q=240+Courthouse+Rd,+Gulfport,+MS+39507";

  return (
    <Box
      sx={{
        p: { xs: 2, md: 3 },
        pt: { xs: 2, md: 6 },
        pb: { xs: 2, md: 2 },
        maxWidth: "900px",
        mx: "auto",
      }}
      component="section"
      aria-labelledby="contact-heading"
    >
      <Typography
        id="contact-heading"
        variant="h2"
        textAlign="center"
        fontWeight="bold"
        color="#3F7C78"
        sx={{ mb: 4, fontSize: { xs: "2rem", md: "2.25rem" } }}
      >
        Contact Our Office
      </Typography>

      <Card
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "#FAF9F7",
        }}
      >
        <CardContent
          component="address"
          aria-label="Office contact information"
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            Insights Christian Counseling
          </Typography>

          <Box display="flex" alignItems="center" mb={1}>
            <RoomIcon color="primary" sx={{ mr: 1 }} aria-hidden="true" />
            <Typography>
              240B Courthouse Rd
              <br />
              Gulfport, MS 39507
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={1}>
            <PhoneIcon color="primary" sx={{ mr: 1 }} aria-hidden="true" />
            <Typography>
              <a
                href="tel:2283433432"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                (228) 343-3432
              </a>
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" mb={1}>
            <PhoneIcon color="primary" sx={{ mr: 1 }} aria-hidden="true" />
            <Typography>
              <a
                href="tel:2285674612"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                (228) 567-4612
              </a>
            </Typography>
          </Box>

          <Typography variant="h6" color="text.secondary" gutterBottom>
            Directions From the Beach
          </Typography>
          <Typography mb={2}>
            Head north on Courthouse Rd from Highway 90 (Beach Blvd).
            <br />
            You'll find our office on the right, before the railroad tracks.
          </Typography>

          <Typography variant="h6" color="text.secondary" gutterBottom>
            Directions From Pass Road
          </Typography>
          <Typography mb={2}>
            Head south on Courthouse Rd. Continue past the railroad tracks,
            <br />
            and our office will be on your left, just after the railroad tracks.
          </Typography>

          <Typography mb={2} color="#D38775" fontWeight="italic">
            Parking is available to the side and behind the building.
          </Typography>

          <Box
            component="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3441.9091040365347!2d-89.04627342474812!3d30.381938874755352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889c17bc5c18e7a9%3A0x1648aff79349b27d!2sInsights%20Christian%20Counseling!5e0!3m2!1sen!2sus!4v1748406918035!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: 8 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map showing location of Insights Christian Counseling"
          />

          <Stack direction="row" spacing={2} mt={3} justifyContent="center">
            <Button
              variant="contained"
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: "#E89072",
                color: "#FAF9F7",
                "&:hover": {
                  backgroundColor: "#d3795b",
                },
              }}
            >
              Open in Google Maps
            </Button>

            <Button
              variant="contained"
              href={appleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: "#E89072",
                color: "#FAF9F7",
                "&:hover": {
                  backgroundColor: "#d3795b",
                },
              }}
            >
              Open in Apple Maps
            </Button>
          </Stack>
        </CardContent>
      </Card>
      
      {/* Hushmail form */}
      {/* <Box
        sx={{
          backgroundColor: "#FAF9F7",
          p: 3,
          borderRadius: 2,
          mt: 2,
          mb: 2,
          maxWidth: 600,
          mx: "auto",
        }}
      >
        <HushmailForm />
      </Box> */}
     
    </Box>
  );
};

export default ContactSection;
