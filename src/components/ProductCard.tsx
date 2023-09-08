import { Card, Image, Text, Badge, Button, Group, Space } from "@mantine/core";
import { ProductCardProps } from "../types/Types";
import { useCart } from "react-use-cart";

function ProductCard({
    product_object,
    image,
    id,
    price,
    name,
    description,
}: ProductCardProps) {
    const { addItem } = useCart();
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src={require(`../assets/images/Iphone_${image.src}.jpeg`)}
                    height={200}
                    alt={image.alt}
                />
            </Card.Section>

            <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>{name}</Text>
                <Badge color="pink" variant="light">
                    On Sale
                </Badge>
            </Group>

            <Text color="green" weight={600}>
                ${price}
            </Text>

            <Space h="sm" />

            <Text size="sm" color="dimmed">
                {description}
            </Text>

            <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => {
                    addItem(product_object, 1);
                }}
            >
                Add to Cart
            </Button>
        </Card>
    );
}

export default ProductCard;
