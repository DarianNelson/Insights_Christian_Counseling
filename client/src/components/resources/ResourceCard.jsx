import React from "react";
import { Paper, Typography, Stack, Link } from "@mui/material";

// ResourceCard component: displays a titled card of resources (with optional links, details, and notes)
const ResourceCard = ({ title, items, color }) => (
  <Paper
    role="region" 
    aria-label={`${title} resource list`} 
    elevation={3}
    sx={{
      p: 2,
      bgcolor: "#FAF9F7",
      borderRadius: 4,
      display: "flex",
      maxWidth: { xs: "100%", sm: "100%", md: 350 }, // Responsive width
      width: "100%",
      flexDirection: "column",
      justifyContent: "space-between", // or can use 'flex-start' if items should hug the top
    }}
  >
    {/* Section heading */}
    <Typography
      variant="h3"
      fontWeight="bold"
      color={color}
      align="center"
      sx={{ mb: 2 }}
    >
      {title}
    </Typography>

    {/* Resource list */}
    <Stack spacing={1.5}>
      {items?.map((item, i) => {
        const onlyLink = item.link && !item.detail && !item.note;

        return (
          <div
            key={i}
            style={{
              textAlign: onlyLink ? "center" : "left",
            }}
            tabIndex={0} 
            aria-label={`Resource: ${item.label}`} 
          >
            {/* If the item has a clickable link */}
            {item.link ? (
              <Link
                href={item.link}
                target="_blank"
                rel="noopener"
                underline="hover"
                fontWeight="bold"
                sx={{ wordBreak: "break-word", whiteSpace: "normal" }}
                aria-label={`Link to ${item.label}`} 
              >
                {item.label}
              </Link>
            ) : ( 
              // Otherwise, just display the title
              <Typography fontWeight="bold" align="center">
                {item.label}
              </Typography>
            )}

            {/* Optional detail field: can be a phone number or URL */}
            {item.detail && (
              <Typography align="center">
                {item.detail.startsWith("http") ? (
                  <Link
                    href={item.detail}
                    target="_blank"
                    underline="hover"
                    aria-label={`External link to ${item.detail}`} 
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

            {/* Optional note field for additional context */}
            {item.note && (
              <Typography
                variant="body2"
                color="text.secondary"
                align="center"
              >
                {item.note}
              </Typography>
            )}
          </div>
        );
      })}
    </Stack>
  </Paper>
);

export default ResourceCard;