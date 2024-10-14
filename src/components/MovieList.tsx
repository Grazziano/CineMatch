import { Movie } from '../types/Movie';
import { Box, Image, Text } from '@chakra-ui/react';

interface MovieListProps {
  movies: Movie[];
}

function MovieList({ movies }: MovieListProps) {
  return (
    <Box
      display="grid"
      gridTemplateColumns={[
        '1fr',
        'repeat(2, 1fr)',
        'repeat(3, 1fr)',
        'repeat(4, 1fr)',
      ]}
      gap={6}
      mt={6}
    >
      {movies.map((movie) => (
        <Box
          key={movie.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image
            src={movie.poster}
            alt={movie.title}
            boxSize={['100%', '300px']}
            objectFit="cover"
          />
          <Box p={4}>
            <Text fontWeight="bold" fontSize={['md', 'lg', 'xl']}>
              {movie.title}
            </Text>
            <Text fontSize={['sm', 'md']}>
              Rating: {movie.rating ? movie.rating : 'N/A'}
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
export default MovieList;
