import React from 'react';
import HomeComponent from '../../HomeComponent';
import FeaturedCategories from './FeaturedCategories';
import Card from './Card';
import PopularCard from './popularCard';
import DailyBestSell from './DailyBestSell';
import DealsOfTheDay from './DealsOfTheDay';
import Contact2 from '../Components/Contact/Contact2';
import CategoryProducts from './CategoryProducts';


const Page = () => {
    return (
        <div>
           <HomeComponent></HomeComponent>
           <FeaturedCategories></FeaturedCategories>
           <Card></Card>
           <PopularCard></PopularCard>
           <DailyBestSell></DailyBestSell>
           <DealsOfTheDay></DealsOfTheDay>
           
           <CategoryProducts></CategoryProducts>
           <Contact2></Contact2>
          
          
        </div>
    );
};

export default Page;