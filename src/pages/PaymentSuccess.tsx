import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { TiTick } from 'react-icons/ti'

import BaseButton from '../components/BaseButton';

import { useNavigate } from 'react-router';

const PaymentSuccess = () => {

    const [opened, { open, close }] = useDisclosure(true);

    const navigate = useNavigate();

    const returnToHome = () => {
        navigate('/')
    }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Payment Success!">

        <BaseButton colour='green' icon={<TiTick />} title='Back to Home' size='md' onClickCallback={returnToHome}/>
      </Modal>
    </>
  )
}

export default PaymentSuccess