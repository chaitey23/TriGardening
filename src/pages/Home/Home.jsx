import React from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import FeaturedProductCard from '../../components/FeaturedProductCard/FeaturedProductCard';
import PopularProducts from '../../components/PopularProducts/PopularProducts';
import PlantClinicAnalysis from '../../components/PlantClinicAnalysis/PlantClinicAnalysis';
import Footer from '../../components/Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryCard></CategoryCard>
            <FeaturedProductCard></FeaturedProductCard>
            <PopularProducts></PopularProducts>
            <PlantClinicAnalysis></PlantClinicAnalysis>
            <Footer></Footer>
        </div>
    );
};

export default Home;