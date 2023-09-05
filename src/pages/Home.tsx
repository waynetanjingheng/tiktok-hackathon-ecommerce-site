import HeaderResponsive from '../components/HeaderResponsive'
import ProductCard from '../components/ProductCard'
import ProductGrid from '../components/ProductGrid';

import { useCart } from "react-use-cart";


const Home = () => {
    const {
        setItems
      } = useCart();

  const defaultuser = {
    name: "Marcus Hooi",
    image: "default-user-icon-13.jpg"
  };

    const defaulttabs = [
        "Products",
        "What's New"
    ];

    const addItemToCartMain = () => {
        console.log('Main function to add item to cart.')
    }

    const productlist = [

        {
            id: "11111",
            price: 560,
            image: {
                src: "7",
                alt: "Iphone 7 product listing"
            },
            name: "Iphone 7",
            description: "Audio formats supported: AAC-LC, HE-AAC, HE-AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX, and AAX+)",
        },

        {
            id: "22222",
            price: 889,
            image: {
                src: "XR",
                alt: "Iphone XR product listing"
            },
            name: "Iphone XR",
            description: "Audio formats supported: AAC-LC, HE-AAC, HE-AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX, and AAX+)",
        },

        {
            id: "33333",
            price: 1130,
            image: {
                src: "11",
                alt: "Iphone 11 product listing"
            },
            name: "Iphone 11",
            description: "Audio formats supported: AAC-LC, HE-AAC, HE-AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX, and AAX+)",
        },

        {
            id: "44444",
            price: 1677,
            image: {
                src: "13",
                alt: "Iphone 13 product listing"
            },
            name: "Iphone 13",
            description: "Audio formats supported: AAC-LC, HE-AAC, HE-AAC v2, Protected AAC, MP3, Linear PCM, Apple Lossless, FLAC, Dolby Digital (AC-3), Dolby Digital Plus (E-AC-3), and Audible (formats 2, 3, 4, Audible Enhanced Audio, AAX, and AAX+)",
        }

    ]

  return (
    <>
        <HeaderResponsive user={defaultuser} tabs={defaulttabs}/>

        <ProductGrid productlist={productlist} addItemToCart={addItemToCartMain}/>
    </>
  )
}

export default Home;