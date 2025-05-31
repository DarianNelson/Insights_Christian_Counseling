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

const ResourceSection = () => {
  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 8 }}>
      <Typography
        id="resources"
        variant="h2"
        textAlign="center"
        fontWeight="bold"
        color="#3F7C78"
        sx={{ mb: 4, fontSize: { xs: "2rem", md: "2.25rem" } }} 
      >
        Resources
      </Typography>

      <AlternatingResourceSection
        title="Recommended Reading"
        items={<BookList books={recommendedBooks} />}
        image={ReadingImage}
        bgColor="#F5EFE6"
        reverse={false}
      />
      <AlternatingResourceSection
        title="Local Resources"
        items={<ResourceList title="Local Resources" items={localResources} />}
        image={LocalImage}
        bgColor="#BFDAD5"
        reverse={true}
      />

      <AlternatingResourceSection
        title="Hotlines"
        items={<ResourceList title="Hotlines" items={hotlines} />}
        image={HotlinesImage}
        bgColor="#F5EFE6"
        reverse={false}
      />

      <AlternatingResourceSection
        title="Other Resources"
        items={<ResourceList title="Other Resources" items={otherResources} />}
        image={OtherImage}
        bgColor="#BFDAD5"
        reverse={true}
      />
    </Box>
  );
};

export default ResourceSection;
