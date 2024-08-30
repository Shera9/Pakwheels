import React from 'react'
import SellYourCar from '../SellYourCar/SellYourCar'
import PakwheelsOfferingData from '../PakwheelsOffering/PakwheelsOfferingData'
import ManagedByPakwheel from '../ManagedByPakwheels/ManagedByPakwheel'
import UsedCarsFeatured from '../UsedCarsForSale/UsedCarsFeatured'
import UsedCarsCarousel from '../Carousel/UsedCarsCarousel'
import HeroSection from '../HeroSection/HeroSection'
import AdSubmission from '../AdForm/AdSubmission'
import NewCarsCarousel from '../FeaturedNewCars/NewCarsCarousel'
import NewCarsMakingData from '../NewCarsByMaking/NewCarsMakingData'
import CarComparison from '../CarComparison/CarComparison'
import AutoStoreCarParts from '../AutoStoreCarParts/AutoStoreCarParts'
import Footer from '../Footer/Footer'
import NewBikesMakingData from '../NewBikesByMake/NewBikesMakingData'
import NewBikesCarousel from '../PopularNewBikes/NewBikesCarousel'

const HomePage = () => {
  return (
    <div>
      
        <HeroSection/>
        <SellYourCar/>
        <UsedCarsCarousel/>
        {/* <PakwheelsOffering/> */}
        <PakwheelsOfferingData/>
        <ManagedByPakwheel/>
        <UsedCarsFeatured/>
        <NewCarsCarousel/>
        <NewCarsMakingData/>
        <CarComparison/>
        <AutoStoreCarParts/>
        <NewBikesMakingData/>
        <NewBikesCarousel/>

       
    </div>
  )
}

export default HomePage
