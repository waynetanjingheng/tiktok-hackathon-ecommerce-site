import { SimpleGrid } from '@mantine/core';
import ProductCard from './ProductCard';
import { ProductGridProps } from '../types/Types';

function ProductGrid({ productlist, addItemToCart }: ProductGridProps) {
  return (
    <SimpleGrid 
        cols={4}
        spacing="lg"
        breakpoints={[
            { maxWidth: '62rem', cols: 3, spacing: 'md' },
            { maxWidth: '48rem', cols: 2, spacing: 'sm' },
            { maxWidth: '36rem', cols: 1, spacing: 'sm' },
        ]}
    >
      
      {
        productlist.map(
            (product) => (
                <ProductCard 
                    key={product.id}
                    image={product.image}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    addItemToCart={addItemToCart}
                />
            )
        )
      }
    </SimpleGrid>
  )
}

export default ProductGrid;