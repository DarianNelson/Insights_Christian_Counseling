// components/resources/ResourceList.jsx
import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

const ResourceList = ({ title, items }) => {
  return (
    <Box textAlign="center">
      <Stack spacing={2}>
        {items.map((item, i) => (
          <Box key={i}>
            {item.link ? (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                fontWeight="bold"
              >
                {item.label}
              </Link>
            ) : (
              <Typography fontWeight="bold">{item.label}</Typography>
            )}
            {item.detail && (
              <Typography>
                {item.detail.startsWith("http") ? (
                  <Link href={item.detail} target="_blank" underline="hover">
                    {item.detail}
                  </Link>
                ) : (
                  <Link href={`tel:${item.detail}`} underline="hover">
                    {item.detail}
                  </Link>
                )}
              </Typography>
            )}
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
