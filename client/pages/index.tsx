﻿import React from 'react'
import ArendaSection from '../components/ArendaSection/ArendaSection'
import FeedBackSection from '../components/FeedBackSection/FeedBackSection'
import MainSection from '../components/MainSection/MainSection'
import PartnersSection from '../components/PartnersSection/PartnersSection'
import ReviewsSection from '../components/ReviewsSection/ReviewsSection'
import SaleSection from '../components/SaleSection/SaleSection'
import ServiceSection from '../components/ServiceSection/ServiceSection'
import MainLayout from '../layouts/MainLayout/MainLayout'

function Index() {
  return (
    <div>
      <MainLayout >
        <MainSection />
        <SaleSection />
        <ArendaSection />
        <ServiceSection />
        <ReviewsSection />
        <PartnersSection />
        <FeedBackSection />
      </MainLayout>
    </div>
  )
}

export default Index