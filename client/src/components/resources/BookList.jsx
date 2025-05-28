import { Box, Stack, Card, CardContent, Typography, Link } from '@mui/material';

const BookList = ({ books }) => {
  if (!books || books.length === 0) return null;

  return (
    <Box sx={{ height: 500,overflowY: 'auto', pr: 1 }}>
      <Stack spacing={2}>
        {books.map((book, index) => (
          <Card key={index} sx={{ bgcolor: '#ffffff', borderLeft: '6px solid #E89072' }}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                <Link href={book.link} target="_blank" rel="noopener">
                  {book.title}
                </Link>
              </Typography>
              <Typography variant="body2" fontStyle="italic" color="text.secondary">
                {book.author}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default BookList;