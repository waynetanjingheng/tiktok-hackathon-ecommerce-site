import { useDisclosure } from "@mantine/hooks";
import { Modal, Group } from "@mantine/core";
import QRPayment from "../components/QRPayment";
import { useNavigate } from "react-router";
import PATHS from "../constants/paths";

const Payment = () => {
    const [opened, { open, close }] = useDisclosure(true);
    const navigate = useNavigate();

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => {
                    close();
                    navigate(PATHS.HOME);
                }}
                title="QR Payment"
                centered
            >
                <QRPayment />
            </Modal>
        </>
    );
};

export default Payment;
