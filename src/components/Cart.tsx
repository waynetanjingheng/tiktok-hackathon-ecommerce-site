import { useCart } from "react-use-cart";
import BaseButton from "./BaseButton";
import { MdRemoveCircle } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import { AiFillDelete } from 'react-icons/ai'
import { Card, Group, Text, SimpleGrid } from '@mantine/core'

function Cart() {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        updateItemQuantity,
        removeItem,
      } = useCart();

    if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
        <h1>Cart ({totalUniqueItems})</h1>

        {items.map((item) => (
            <Card 
                key={item.id}
                padding='sm'
                radius='sm'
                withBorder
            >

                <Group position="apart" mt="md" mb="xs">
                        <Text weight={500}>{item.quantity} x {item.name}</Text>
                </Group>

                <SimpleGrid 
                    cols={3} 
                    spacing="lg"         
                    breakpoints={[
                        { maxWidth: '62rem', cols: 3, spacing: 'md' },
                        { maxWidth: '48rem', cols: 2, spacing: 'sm' },
                        { maxWidth: '36rem', cols: 1, spacing: 'sm' },
                    ]}
                >
                    <BaseButton
                        title="1"
                        icon={<MdRemoveCircle />}
                        size="xs"
                        colour="blue"
                        onClickCallback={() => updateItemQuantity(item.id, (item.quantity && item.quantity > 0) ? item.quantity - 1: 0)}
                    />

                    <BaseButton
                        title="1"
                        icon={<IoMdAdd />}
                        size="xs"
                        colour="blue"
                        onClickCallback={() => updateItemQuantity(item.id, (item.quantity && item.quantity > 0) ? item.quantity + 1: 1)}
                    />

                    <BaseButton
                        title="Delete"
                        icon={<AiFillDelete />}
                        size="xs"
                        colour="red"
                        onClickCallback={() => removeItem(item.id)}
                    />
                </SimpleGrid>

            </Card>
        ))}
    </>
  );
};

export default Cart;