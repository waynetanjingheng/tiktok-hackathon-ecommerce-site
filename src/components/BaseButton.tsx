import { Button, createStyles } from '@mantine/core';
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BaseButtonProps } from '../types/Types';

const BaseButton = ({ title, onClickCallback }: BaseButtonProps) => {

  return (
    <Button 
        color='red'
        leftIcon={<HiOutlineShoppingCart />}
        size='md'
        onClick={onClickCallback}
    >
        {title}
    </Button>
  )
}

export default BaseButton;