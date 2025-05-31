import React from "react";
import { Grid } from "@mui/material";
import TherapistCard from "./TherapistCard";
import { therapistsData } from "../../data/therapists";

// TeamSection component maps over an array of therapist data and renders a TherapistCard for each
const TeamSection = () => {
  return (
    <Grid
      container
      spacing={4}
      role="region" 
      aria-label="Meet our team of therapists" 
    >
      {/* Map over therapistsData to dynamically create a grid of TherapistCards */}
      {therapistsData.map((therapist, index) => (
        <Grid
          item
          xs={12} 
          key={index} 
          tabIndex={0} 
        >
          <TherapistCard therapist={therapist} /> {/* Pass individual therapist data to card */}
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamSection;