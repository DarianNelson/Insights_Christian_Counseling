import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import SpecialtyCard from "./SpecialtyCard";
import ServicesCard from "./ServicesCard";
import FeesInsuranceCard from "./FeesInsuranceCard";

const TherapistCard = ({ therapist }) => {
  return (
    <Box
      id={therapist.slug} // 👈 this enables in-page linking
      sx={{ maxWidth: 1080, mx: "auto", px: { xs: 2, md: 3 }, mb: 6 }}
    >
      {/* Top Grid: Headshot + Specialties (left) and Bio (right) */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "240px 1fr" },
          gap: 3,
          alignItems: "start",
        }}
      >
        {/* Left: Headshot + SpecialtyCard */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: 240 },
              aspectRatio: "1 / 1",
              backgroundColor: "#FAF9F7",
              boxShadow: 3,
              borderRadius: 2,
              border: "10px solid #FAF9F7",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Box
              component="img"
              src={therapist.photo}
              alt={therapist.name}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 1,
              }}
            />
          </Box>

          <SpecialtyCard specialties={therapist.specialties} />
        </Box>

        {/* Right: Bio Card */}
        <Card
          sx={{ backgroundColor: "#FAF9F7", borderRadius: 4, boxShadow: 2 }}
        >
          <CardContent sx={{ px: 3, py: 3 }}>
            <Typography
              id="therapist.slug"
              variant="h3"
              color="#3F7C78"
              sx={{ mb: 1 }}
            >
              {therapist.name}
            </Typography>

            <Typography variant="body1" color="textSecondary">
              {therapist.credentials}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {therapist.license}
            </Typography>
            {therapist.affiliation && (
              <Typography variant="body2" color="#3F7C78">
                {therapist.affiliation}
              </Typography>
            )}

            <Divider sx={{ my: 1, bgcolor: "#D3E3DC" }} />

            {therapist.bio.map((paragraph, idx) => (
              <Typography key={idx} variant="body1" paragraph>
                {paragraph}
              </Typography>
            ))}

            {/* Footer with Psychology Today logo and Schedule Button */}
            <Box
              mt={3}
              pt={2}
              borderTop="1px solid #D3E3DC"
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              gap={2}
              flexWrap="wrap"
            >
              {therapist.psychologyTodayUrl && (
                <Box
                  component="a"
                  href={therapist.psychologyTodayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Box
                    component="img"
                    src="/images/psychology-today.png"
                    alt="Psychology Today"
                    sx={{ height: 36 }}
                  />
                </Box>
              )}

              <Button
                size="medium"
                component="a"
                href="https://your-hushmail-form-link.com"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#D38775",
                  border: "1px solid #D38775",
                  borderRadius: "50px",
                  px: 2.5,
                  py: 1,
                  whiteSpace: "nowrap",
                  fontSize: "1rem",
                  fontWeight: 500,
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#D38775",
                    color: "#FAF9F7",
                  },
                }}
              >
                Schedule an Appointment
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>

      {/* Bottom Section: Services and Fees Cards Full Width */}
      <Box mt={2} display="flex" flexDirection="column" gap={2}>
        <ServicesCard services={therapist.services} />
        <FeesInsuranceCard
          fees={therapist.fees}
          insurance={therapist.insurance}
        />
      </Box>
    </Box>
  );
};

export default TherapistCard;
