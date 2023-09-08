import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { TiTick } from "react-icons/ti";

import BaseButton from "../components/BaseButton";

import { useNavigate } from "react-router";
import PATHS from "../constants/paths";

const PaymentSuccess = () => {
    const [opened, { close }] = useDisclosure(true);

    const navigate = useNavigate();

    const returnToHome = () => {
        navigate(PATHS.HOME);
    };

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => {
                    close();
                    returnToHome();
                }}
                title="Payment Success!"
            >
                <BaseButton
                    colour="green"
                    icon={<TiTick />}
                    title="Back to Home"
                    size="md"
                    onClickCallback={returnToHome}
                />
            </Modal>
        </>
    );
};

export default PaymentSuccess;
