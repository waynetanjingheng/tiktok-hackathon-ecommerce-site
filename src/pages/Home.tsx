import HeaderResponsive from '../components/HeaderResponsive'

const Home = () => {
  const defaultuser = {
    name: "Marcus Hooi",
    image: "default-user-icon-13.jpg"
  };

    const defaulttabs = [
        "Products",
        "What's New"
    ];

  return (
    <>
        <HeaderResponsive user={defaultuser} tabs={defaulttabs}/>
    </>
  )
}

export default Home;