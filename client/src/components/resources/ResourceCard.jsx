import React from 'react';
import { Paper, Typography, Stack, Link } from '@mui/material';

const ResourceCard = ({ title, items, color }) => (
  <Paper
    elevation={3}
    sx={{
      p: 2,
      bgcolor: '#FAF9F7',
      borderLeft: `4px solid ${color}`,
      display: 'flex',
      maxWidth: { xs: '100%', sm: '100%', md: 350 },
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between', // or 'flex-start' if you prefer top-aligned
    }}
  >
    <Typography variant="h6" color={color} gutterBottom align="center">
      {title}
    </Typography>
    <Stack spacing={1}>
{items?.map((item, i) => {
  const onlyLink = item.link && !item.detail && !item.note;

  return (
    <div
      key={i}
      style={{
        textAlign: onlyLink ? 'center' : 'left',
      }}
    >
      {item.link ? (
        <Link
          href={item.link}
          target="_blank"
          rel="noopener"
          underline="hover"
          fontWeight="bold"
          sx={{ wordBreak: 'break-word', whiteSpace: 'normal' }}
        >
          {item.label}
        </Link>
      ) : (
        <Typography fontWeight="bold" align="center">
          {item.label}
        </Typography>
      )}
      {item.detail && (
        <Typography align="center">
          {item.detail.startsWith('http') ? (
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
        <Typography variant="body2" color="text.secondary" align="center">
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