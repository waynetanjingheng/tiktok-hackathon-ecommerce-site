export type HeaderResponsiveProps = {
    user: { name: string; image: string };
    tabs: string[];
};

export type BaseButtonProps = {
    title: string,
    icon: React.ReactNode,
    size: string,
    colour: string,
    onClickCallback: () => void
};

export type ProductCardProps = {
    image: {
        src: string,
        alt: string
    },

    id: string,
    price: number,
    name: string,
    description: string,
    addItemToCart: ProductGridProps["addItemToCart"]
};

export type Product = {
    image: {
        src: string,
        alt: string
    },

    id: string,
    price: number,
    name: string,
    description: string,
}

export type ProductGridProps = {
    productlist: Product[];
    addItemToCart: () => void
};