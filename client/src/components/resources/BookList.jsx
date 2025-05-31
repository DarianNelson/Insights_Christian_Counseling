import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

// BookList component: renders a vertical scrollable list of recommended books
const BookList = ({ books }) => (
  <Box
    role="region" 
    aria-label="Recommended reading list" 
    tabIndex={0}
    textAlign="center"
    sx={{
      maxHeight: 300,
      overflowY: "auto", // Scrollable if content overflows
      pr: 1, // Padding for scrollbar space
      mt: 2,
      borderRadius: 2,
      p: 2,
    }}
  >
    {/* Stack layout for spacing between book entries */}
    <Stack spacing={2} alignItems="center">
      {books.map((book, i) => (
        <Box key={i}>
          {/* Clickable book title link */}
          <Link
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="text.primary"
            fontWeight="bold"
            variant="h4"
            aria-label={`Book: ${book.title} by ${book.author}`} 
          >
            {book.title}
          </Link>

          {/* Author name */}
          <Typography variant="body2" color="#3F7C78">
            by {book.author}
          </Typography>
        </Box>
      ))}
    </Stack>
  </Box>
);

export default BookList;