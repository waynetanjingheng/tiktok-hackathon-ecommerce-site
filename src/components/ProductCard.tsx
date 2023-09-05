import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { ProductCardProps } from '../types/Types';
import { useCart } from 'react-use-cart';

function ProductCard({ product_object, image, id, name, description }: ProductCardProps) {

    const { addItem } = useCart();

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={ require(`../assets/images/Iphone_${image.src}.jpeg`) }
          height={160}
          alt={image.alt}
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{name}</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" color="dimmed">
        {description}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={() => addItem(product_object, 1)}>
        Add to Cart
      </Button>

    </Card>
  );
}

export default ProductCard;