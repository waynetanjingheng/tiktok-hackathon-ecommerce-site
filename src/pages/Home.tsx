import { useCart } from "react-use-cart";
import HeaderResponsive from "../components/HeaderResponsive";
import ProductGrid from "../components/ProductGrid";
import { Notification } from "@mantine/core";
import { useEffect, useRef, useState } from "react";
const defaultuser = {
    name: "Marcus Hooi",
    image: "default-user-icon-13.jpg",
};

const productlist = [
    {
        id: "11111",
        price: 560,
        image: {
            src: "7",
            alt: "Iphone 7 product listing",
        },
        name: "Iphone 7",
        description:
            "Audio formats supported: and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX, and AAX+)",
    },

    {
        id: "22222",
        price: 889,
        image: {
            src: "XR",
            alt: "Iphone XR product listing",
        },
        name: "Iphone XR",
        description:
            "Audio formats supported: and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX, and AAX+)",
    },

    {
        id: "33333",
        price: 1130,
        image: {
            src: "11",
            alt: "Iphone 11 product listing",
        },
        name: "Iphone 11",
        description:
            "Audio formats supported: and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX, and AAX+)",
    },

    {
        id: "44444",
        price: 1677,
        image: {
            src: "13",
            alt: "Iphone 13 product listing",
        },
        name: "Iphone 13",
        description:
            "Audio formats supported: AAC-LC, and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX, and AAX+)",
    },
];

const Home = () => {
    const { totalItems } = useCart();
    const [notifications, setNotifications] = useState<
        {
            timeAdded: number;
            message: string;
        }[]
    >([]);

    const totalItemsPreviousRef = useRef(totalItems);

    useEffect(() => {
        if (totalItemsPreviousRef.current === undefined) return;

        if (totalItems > totalItemsPreviousRef.current) {
            setNotifications((prev) => {
                return [
                    ...prev,
                    {
                        timeAdded: Date.now(),
                        message: "Item added to cart",
                    },
                ];
            });
        } else if (totalItems < totalItemsPreviousRef.current) {
            setNotifications((prev) => {
                return [
                    ...prev,
                    {
                        timeAdded: Date.now(),
                        message: "Item removed from cart",
                    },
                ];
            });
        }

        totalItemsPreviousRef.current = totalItems;
    }, [totalItems]);

    useEffect(() => {
        const timeout = setInterval(() => {
            setNotifications((prev) => {
                return prev.filter(
                    (item) => item.timeAdded + 5000 > Date.now()
                );
            });
        }, 100);

        return () => {
            clearInterval(timeout);
        };
    }, []);

    return (
        <>
            <div
                style={{
                    position: "fixed",
                    top: 30,
                    left: 10,
                    display: "flex",
                    rowGap: "1rem",
                    flexDirection: "column",
                }}
            >
                {notifications.map((item, index) => (
                    <Notification
                        title={item.message}
                        key={index}
                        color={
                            item.message === "Item removed from cart"
                                ? "red"
                                : "green"
                        }
                    />
                ))}
            </div>
            <HeaderResponsive user={defaultuser} />
            <ProductGrid productlist={productlist} />
        </>
    );
};

export default Home;
