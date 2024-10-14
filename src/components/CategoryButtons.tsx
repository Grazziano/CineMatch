import { Button, HStack, Icon } from '@chakra-ui/react';
import { FaHeart, FaSkull, FaBolt, FaLaugh, FaDragon } from 'react-icons/fa';

interface CategoryButtonsProps {
  onCategorySelect: (category: string) => void;
}

function CategoryButtons({ onCategorySelect }: CategoryButtonsProps) {
  const categories = [
    { label: 'Romance', icon: FaHeart },
    { label: 'Terror', icon: FaSkull },
    { label: 'Ação', icon: FaBolt },
    { label: 'Comédia', icon: FaLaugh },
    { label: 'Fantasia', icon: FaDragon },
  ];

  return (
    <HStack spacing={4} mt={4} wrap="wrap">
      {categories.map((category) => (
        <Button
          key={category.label}
          leftIcon={<Icon as={category.icon} />}
          colorScheme="teal"
          onClick={() => onCategorySelect(category.label)}
        >
          {category.label}
        </Button>
      ))}
    </HStack>
  );
}

export default CategoryButtons;
