import QRCode from "react-qr-code";
import { useCart } from "react-use-cart";
import { Card, Text, Center, Space } from '@mantine/core'
import BaseButton from "./BaseButton"; // REMOVE AFTER GQL INTEGRATION
import { PiSmileySticker } from 'react-icons/pi'
import { useNavigate } from "react-router";

import { useMerchantRequestQrMutation, useMerchantGetQrDetailsQuery, Currency } from "../generated/graphql";
import { v4 as uuid4 } from 'uuid';
import { useState, useEffect } from "react";

const QRPayment = () => {

    const navigate = useNavigate();

    const redirectToPaymentSuccess = () => {
        navigate('/payment/success');
    }

    const MERCHANT_NAME = "Marketplace Pte Ltd";

    const { cartTotal } = useCart();

    const order_id = uuid4();

    const initialQRvalue = uuid4()

    const [requestQR] = useMerchantRequestQrMutation();

    const [QRvalue, setQRvalue] = useState(initialQRvalue)

    async function getQRstring() {
        const { data } =  await requestQR({
            variables: {
                orderId: order_id,
                amount: cartTotal,
                currency: Currency.SGD
            }
        })

        console.log(`Merchant QR request result: ${data}`);

        if (!data) {
            console.log("Data is null or undefined.")
            return
        }

        const id = data["merchantRequestQR"].id;

        setQRvalue(id)
        console.log(id)
    }

    useEffect(() => {getQRstring()}, [])

    console.log(QRvalue)

    const { data, startPolling, stopPolling, refetch } = useMerchantGetQrDetailsQuery({
        // pollInterval: 500,
        variables: {
            merchantGetQrDetailsId: QRvalue,
        }
    })

    // useEffect(() => {
    //     startPolling(500);
    // }, [startPolling])

    // useEffect(() => {
    //     refetch();
    // }, [refetch])

    console.log(data)

  return (
    <Card padding="lg" radius="md">

        <Text>
            You are making a secured payment to {MERCHANT_NAME}.
        </Text>

        <Space h="xl" />

        <Card.Section>
            <Center>
                <QRCode value={QRvalue} />
            </Center>
        </Card.Section>

        <Space h="xl" />
        <Space h="xl" />

        <Text>
            <p>Username: Roy</p>
            <p>Amount: ${cartTotal}</p>
        </Text>

        <Text>
            <b>Instructions</b>
            <p>1. Scan the QR code above with the <i>TMoney</i> app on your mobile device.</p>
            <p>2. Authorize the payment on the app.</p>
            <p>3. Upon successful payment, you will be redirected to a confirmation page.</p>
        </Text>

        <BaseButton colour="red" icon={<PiSmileySticker />} size="md" onClickCallback={redirectToPaymentSuccess} title="Success"/>

    </Card>
  )
}

export default QRPayment