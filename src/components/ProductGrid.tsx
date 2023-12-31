import { SimpleGrid, Container } from "@mantine/core";
import ProductCard from "./ProductCard";
import { ProductGridProps } from "../types/Types";

function ProductGrid({ productlist }: ProductGridProps) {
    return (
        <Container>
            <SimpleGrid
                cols={3}
                spacing="lg"
                breakpoints={[
                    { maxWidth: "62rem", cols: 3, spacing: "md" },
                    { maxWidth: "48rem", cols: 2, spacing: "sm" },
                    { maxWidth: "36rem", cols: 1, spacing: "sm" },
                ]}
            >
                {productlist.map((product) => (
                    <ProductCard
                        key={product.id}
                        product_object={product}
                        image={product.image}
                        id={product.id}
                        price={product.price}
                        name={product.name}
                        description={product.description}
                    />
                ))}
            </SimpleGrid>
        </Container>
    );
}

export default ProductGrid;
