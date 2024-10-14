import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import MovieSearch from './components/MovieSearch';

function App() {
  return (
    <ChakraProvider>
      <Box p={5}>
        <Heading mb={6}>Movie & Series Recommendations</Heading>
        <MovieSearch />
      </Box>
    </ChakraProvider>
  );
}

export default App;
