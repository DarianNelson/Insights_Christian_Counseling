// components/resources/BookList.jsx
import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";

const BookList = ({ books }) => (
  <Box
    textAlign="center"
    sx={{
      maxHeight: 300,
      overflowY: "auto",
      pr: 1,
      mt: 2,
      borderRadius: 2,
      p: 2,
    }}
  >
    <Stack spacing={2} alignItems="center">
      {books.map((book, i) => (
        <Box key={i}>
          <Link
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            underline="hover"
            color="text.primary"
            fontWeight="bold"
            variant="h4"
          >
            {book.title}
          </Link>
          <Typography variant="body2" color="#3F7C78">
            by {book.author}
          </Typography>
        </Box>
      ))}
    </Stack>
  </Box>
);

export default BookList;
