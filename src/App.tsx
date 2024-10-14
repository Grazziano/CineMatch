import { ChakraProvider, Box, Heading } from '@chakra-ui/react';
import MovieSearch from './components/MovieSearch';

function App() {
  return (
    <ChakraProvider>
      <Box p={[4, 6, 8]} maxW="1200px" mx="auto">
        <Heading mb={6} fontSize={['2xl', '3xl', '4xl']}>
          CineMatch
        </Heading>
        <MovieSearch />
      </Box>
    </ChakraProvider>
  );
}

export default App;
