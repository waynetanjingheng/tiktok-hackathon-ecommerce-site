import QRCode from "react-qr-code";
import { useCart } from "react-use-cart";
import { Card, Text, Center, Space } from "@mantine/core";
import { useNavigate } from "react-router";

import {
    useMerchantRequestQrMutation,
    useMerchantGetQrDetailsQuery,
    Currency,
    MerchantPaymentStatus,
} from "../generated/graphql";
import { v4 as uuid4 } from "uuid";
import { useState, useEffect } from "react";
import PATHS from "../constants/paths";

const initialQRvalue = uuid4();
const MERCHANT_NAME = "Marketplace Pte Ltd";

const QRPayment = () => {
    const navigate = useNavigate();

    const { cartTotal, emptyCart } = useCart();

    const [requestQR] = useMerchantRequestQrMutation();

    const [QRvalue, setQRvalue] = useState(initialQRvalue);

    useEffect(() => {
        (async () => {
            const order_id = uuid4();
            const { data } = await requestQR({
                variables: {
                    orderId: order_id,
                    amount: cartTotal,
                    currency: Currency.SGD,
                },
            });

            if (!data) {
                console.log("Data is null or undefined.");
                return;
            }

            const id = data["merchantRequestQR"].id;

            setQRvalue(id);
        })();
    }, [cartTotal, requestQR]);

    const { data } = useMerchantGetQrDetailsQuery({
        pollInterval: 500,
        variables: {
            merchantGetQrDetailsId: QRvalue,
        },
        fetchPolicy: "cache-and-network",
    });

    const paymentStatus = data?.merchantGetQRDetails.merchantPaymentStatus;
    useEffect(() => {
        if (paymentStatus === MerchantPaymentStatus.COMPLETED) {
            navigate(PATHS.PAYMENT_SUCCESS);
            emptyCart();
        }
    }, [emptyCart, navigate, paymentStatus]);

    return (
        <Card padding="lg" radius="md">
            <Text>You are making a secured payment to {MERCHANT_NAME}.</Text>

            <Space h="xl" />

            <Card.Section>
                <Center>
                    <QRCode value={QRvalue} />
                </Center>
            </Card.Section>

            <Space h="xl" />
            <Space h="xl" />

            <Text>
                <p>Username: Marcus</p>
                <p>Amount: ${cartTotal}</p>
            </Text>

            <Text>
                <b>Instructions</b>
                <p>
                    1. Scan the QR code above with the <i>TMoney</i> app on your
                    mobile device.
                </p>
                <p>2. Authorize the payment on the app.</p>
                <p>
                    3. Upon successful payment, you will be redirected to a
                    confirmation page.
                </p>
            </Text>
        </Card>
    );
};

export default QRPayment;
