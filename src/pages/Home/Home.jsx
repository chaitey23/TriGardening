import React from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import FeaturedProductCard from '../../components/FeaturedProductCard/FeaturedProductCard';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CategoryCard></CategoryCard>
            <FeaturedProductCard></FeaturedProductCard>
        </div>
    );
};

export default Home;