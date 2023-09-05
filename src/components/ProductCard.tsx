import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { ProductCardProps } from '../types/Types';

function ProductCard({ image, id, name, description, addItemToCart }: ProductCardProps) {
    const callback = () => {
        console.log('mock')
    }

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

      <Button variant="light" color="blue" fullWidth mt="md" radius="md" onClick={addItemToCart}>
        Add to Cart
      </Button>

    </Card>
  );
}

export default ProductCard;