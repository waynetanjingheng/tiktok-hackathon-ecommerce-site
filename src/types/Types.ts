export type HeaderResponsiveProps = {
    user: { name: string; image: string };
    tabs: string[];
};

export type BaseButtonProps = {
    title: string,
    onClickCallback: () => void
};

export type ProductCardProps = {
    image: {
        src: string,
        alt: string
    },

    id: number,
    name: string,
    description: string,
    addItemToCart: ProductGridProps["addItemToCart"]
};

export type Product = {
    image: {
        src: string,
        alt: string
    },

    id: number,
    name: string,
    description: string,
}

export type ProductGridProps = {
    productlist: Product[];
    addItemToCart: () => void
};