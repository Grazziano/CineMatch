import { useState } from 'react';
import { Box, Input, Button, Text } from '@chakra-ui/react';
import { Movie } from '../types/Movie';
import { searchMovies } from '../services/api';
import MovieList from './MovieList';

export default function MovieSearch() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      const result = await searchMovies(query);
      if (result.length > 0) {
        setMovies(result);
        setError('');
      } else {
        setError('No movies found.');
      }
    } catch (err) {
      setError('Error fetching movies.');
    }
  };

  return (
    <Box p={[4, 6, 8]} maxW="1200px" mx="auto">
      <Box display="flex" flexDirection="row" gap="4">
        <Input
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          mb={4}
          size="lg"
          w={['100%', '100%', '50%']}
        />
        <Button onClick={handleSearch} colorScheme="teal" size="lg" mb={4}>
          Search
        </Button>
      </Box>
      {error && (
        <Text color="red.500" mt={4}>
          {error}
        </Text>
      )}
      <MovieList movies={movies} />
    </Box>
  );
}
