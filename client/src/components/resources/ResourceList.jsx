import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

// ResourceList component: renders a vertical list of resources with optional links, details, and notes
const ResourceList = ({ title, items }) => {
  return (
    <Box
      component="section"
      role="region"
      aria-label={`${title} resources`}
      tabIndex={0}
      textAlign="center"
    >
      <Stack spacing={1.5}>
        {items.map((item, i) => (
          <Box
            key={i}
            tabIndex={0}
            aria-label={`Resource: ${item.label}`}
          >
            {/* Primary label, optionally clickable */}
            {item.link ? (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                fontWeight="bold"
                aria-label={`External link: ${item.label}`}
              >
                {item.label}
              </Link>
            ) : (
              <Typography fontWeight="bold">
                {item.label}
              </Typography>
            )}

            {/* Optional detail field */}
            {item.detail && (
              <Typography>
                {item.detail.startsWith("http") ? (
                  <Link
                    href={item.detail}
                    target="_blank"
                    underline="hover"
                    aria-label={`Visit ${item.detail}`}
                  >
                    {item.detail}
                  </Link>
                ) : (
                  <Link
                    href={`tel:${item.detail}`}
                    underline="hover"
                    aria-label={`Call ${item.detail}`}
                  >
                    {item.detail}
                  </Link>
                )}
              </Typography>
            )}

            {/* Optional note */}
            {item.note && (
              <Typography variant="body2" color="text.secondary">
                {item.note}
              </Typography>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ResourceList;