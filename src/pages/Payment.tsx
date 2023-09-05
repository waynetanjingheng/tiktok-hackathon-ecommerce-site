import { useDisclosure } from '@mantine/hooks';
import { Modal, Group } from '@mantine/core';
import QRPayment from '../components/QRPayment';

const Payment = () => {
    const [opened, { open, close }] = useDisclosure(true);

  return (
    
    <>
      <Modal opened={opened} onClose={close} title="QR Payment" centered>
        <QRPayment />
      </Modal>
    </>

  )
}

export default Payment