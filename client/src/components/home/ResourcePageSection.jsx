import React from "react";
import { Box, Typography } from "@mui/material";
import BookList from "../../components/resources/BookList";
import recommendedBooks from "../../data/recommendedBooks";
import AlternatingResourceSection from "../../components/resources/AlternatingResourceSection";
import ResourceList from "../../components/resources/ResourceList";
import {
  localResources,
  hotlines,
  otherResources,
} from "../../data/resourceData";

import LocalImage from "../../assets/images/Resources/local.jpg";
import HotlinesImage from "../../assets/images/Resources/hotlines.jpg";
import OtherImage from "../../assets/images/Resources/other.jpg";
import ReadingImage from "../../assets/images/Resources/reading.jpg";

// ResourceSection component: master section that renders all categorized resources
const ResourceSection = () => {
  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, sm: 4 },
        pt: { xs: 2, md: 6 }, 
        pb: { xs: 2, md: 2 },
      }}
      aria-labelledby="resources"
    >
      {/* Section heading */}
      <Typography
        id="resources"
        variant="h2"
        textAlign="center"
        fontWeight="bold"
        color="#3F7C78"
        sx={{
          mb: 4, // match TherapistsSection title mb
          fontSize: { xs: "2rem", md: "2.25rem" },
        }}
      >
        Resources
      </Typography>

      {/* Recommended Reading section: displays a list of books */}
      <AlternatingResourceSection
        title="Recommended Reading"
        items={<BookList books={recommendedBooks} />}
        image={ReadingImage}
        bgColor="#F5EFE6"
        reverse={false} // Left image, right text on wide screens
        aria-label="Section: Recommended Reading Resources"
      />

      {/* Local Resources section */}
      <AlternatingResourceSection
        title="Local Resources"
        items={<ResourceList title="Local Resources" items={localResources} />}
        image={LocalImage}
        bgColor="#BFDAD5"
        reverse={true} // Right image, left text on wide screens
        aria-label="Section: Local Resource Links"
      />

      {/* Hotlines section: emergency and support contacts */}
      <AlternatingResourceSection
        title="Hotlines"
        items={<ResourceList title="Hotlines" items={hotlines} />}
        image={HotlinesImage}
        bgColor="#F5EFE6"
        reverse={false}
        aria-label="Section: Hotline Numbers and Support Lines"
      />

      {/* Other helpful resources */}
      <AlternatingResourceSection
        title="Other Resources"
        items={<ResourceList title="Other Resources" items={otherResources} />}
        image={OtherImage}
        bgColor="#BFDAD5"
        reverse={true}
        aria-label="Section: Additional Online and Local Resources"
      />
    </Box>
  );
};

export default ResourceSection;
