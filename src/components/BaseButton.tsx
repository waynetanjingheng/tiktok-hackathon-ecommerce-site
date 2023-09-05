import { Button } from '@mantine/core';
import { BaseButtonProps } from '../types/Types';

const BaseButton = ({ title, icon, size, colour, onClickCallback }: BaseButtonProps) => {

  return (
    <Button 
        color={colour}
        leftIcon={icon}
        size={size}
        onClick={onClickCallback}
    >
        {title}
    </Button>
  )
}

export default BaseButton;