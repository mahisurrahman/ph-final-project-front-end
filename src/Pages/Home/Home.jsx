import Banner from "../../Components/Banner/Banner";
import BlankBanner from "../../Components/BlankBanner/BlankBanner";
import ChefRecommends from "../../Components/ChefRecommends/ChefRecommends";
import MenuSection from "../../Components/MenuSection/MenuSection";
import PhoneCall from "../../Components/PhoneCall/PhoneCall";
import HomeSwiper from "../../Components/Swiper/HomeSwiper";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeSwiper></HomeSwiper>
            <BlankBanner></BlankBanner>
            <MenuSection></MenuSection>
            <PhoneCall></PhoneCall>
            <ChefRecommends></ChefRecommends>
        </div>
    );
};

export default Home;