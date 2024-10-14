import { Movie } from '../types/Movie';
import { Box, Image, Text } from '@chakra-ui/react';

interface MovieListProps {
  movies: Movie[];
}

function MovieList({ movies }: MovieListProps) {
  return (
    <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap={6} mt={6}>
      {movies.map((movie) => (
        <Box
          key={movie.id}
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image src={movie.poster} alt={movie.title} />
          <Box p="6">
            <Text fontWeight="bold" fontSize="xl">
              {movie.title}
            </Text>
            <Text>Rating: {movie.rating ? movie.rating : 'N/A'}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
export default MovieList;
