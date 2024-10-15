import { useState } from 'react';
import { Movie } from '../types/Movie';
import {
  Box,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Flex,
  Badge,
} from '@chakra-ui/react';
import { getMovieDetails } from '../services/api';

interface MovieListProps {
  movies: Movie[];
}

function MovieList({ movies }: MovieListProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(false);

  const handleMovieClick = async (id: string) => {
    setLoading(true);
    try {
      const movieDetails = await getMovieDetails(id);
      setSelectedMovie(movieDetails);
      onOpen();
    } catch (error) {
      console.error('Error fetching movie details:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
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
            onClick={() => handleMovieClick(movie.id)}
            cursor="pointer"
            _hover={{ boxShadow: 'lg' }}
            transition="all 0.3s"
          >
            <Image
              src={movie.poster}
              alt={movie.title}
              boxSize={['100%', '300px']}
              objectFit="cover"
            />
            <Box p={4} bg="gray.50">
              <Text fontWeight="bold" fontSize={['md', 'lg', 'xl']}>
                {movie.title}
              </Text>
              <Text fontSize={['sm', 'md']} color="gray.600">
                Rating: {movie.rating ? movie.rating : 'N/A'}
              </Text>
            </Box>
          </Box>
        ))}
      </Box>

      {selectedMovie && (
        <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
          <ModalOverlay />
          <ModalContent bg="gray.900" color="white">
            <ModalHeader>
              <Flex alignItems="center">
                {selectedMovie.title}
                <Badge ml={3} colorScheme="yellow">
                  {selectedMovie.rating}/10
                </Badge>
              </Flex>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex flexDirection={['column']} alignItems="center" gap={4}>
                <Image
                  src={selectedMovie.poster}
                  alt={selectedMovie.title}
                  boxSize="300px"
                  objectFit="cover"
                  borderRadius="md"
                  shadow="md"
                />
                <Box>
                  <Text mb={4} fontSize="md" color="gray.300">
                    {selectedMovie.description}
                  </Text>
                  <Badge colorScheme="blue" mr={2}>
                    Genre: Action
                  </Badge>
                  <Badge colorScheme="green">Release Date: 2022</Badge>
                </Box>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="teal" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

export default MovieList;
