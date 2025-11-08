import React from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import FeaturedProductCard from '../../components/FeaturedProductCard/FeaturedProductCard';
import PopularProducts from '../../components/PopularProducts/PopularProducts';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryCard></CategoryCard>
            <FeaturedProductCard></FeaturedProductCard>
            <PopularProducts></PopularProducts>
        </div>
    );
};

export default Home;