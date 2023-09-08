export type HeaderResponsiveProps = {
    user: { name: string; image: string };
};

export type BaseButtonProps = {
    title: string;
    icon: React.ReactNode;
    size: string;
    colour: string;
    onClickCallback: () => void;
};

export type ProductCardProps = {
    product_object: Product;
    image: {
        src: string;
        alt: string;
    };

    id: string;
    price: number;
    name: string;
    description: string;
};

export type Product = {
    image: {
        src: string;
        alt: string;
    };

    id: string;
    price: number;
    name: string;
    description: string;
};

export type ProductGridProps = {
    productlist: Product[];
};
