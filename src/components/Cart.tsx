import { useCart } from "react-use-cart";
import BaseButton from "./BaseButton";
import { MdRemoveCircle } from 'react-icons/md'
import { IoMdAdd } from 'react-icons/io'
import { AiFillDelete } from 'react-icons/ai'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { IoBagCheckOutline } from 'react-icons/io5'
import { Card, Group, Text, SimpleGrid, Space } from '@mantine/core'

import { useNavigate } from "react-router";

function Cart() {

    const navigate = useNavigate();

    const loadQrPaymentPage = () => {
        navigate('/payment');
    };

    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        updateItemQuantity,
        removeItem,
        emptyCart,
        cartTotal
      } = useCart();

    if (isEmpty) return <p>Your cart is empty</p>;

  return (
    <>
        <p>{totalUniqueItems} unique products in your cart.</p>

        {items.map((item) => (
            <Card 
                key={item.id}
                padding='lg'
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

        <Space h="lg" />

        <p>Total item quantity: {totalItems}</p>
        <h3>Cart Total: ${cartTotal}</h3>


        <SimpleGrid>
            <BaseButton 
                colour="red"
                icon={<RiDeleteBin5Line />}
                size="md"
                onClickCallback={() => emptyCart()}
                title="Empty Cart"
            />

            <BaseButton 
                colour="green"
                icon={<IoBagCheckOutline />}
                size="md"
                onClickCallback={loadQrPaymentPage}
                title="Checkout with TMoney"
            />
        </SimpleGrid>
    </>
  );
};

export default Cart;