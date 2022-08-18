import React from 'react'
import Head from 'next/head'
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
      <Head>
        <title>"ДИВА Недвижимость" - агентство недвижимости в Пензе</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="Агентство недвижимости пенза, аренда недвижимости пенза, продажа квартир в пензе, договор с агентством недвижимости, дива недвижимость" />
        <meta name="description" content="ДИВА Недвижимость - агентство недвижимости по продаже, покупке, аренде жилой и нежилой недвижимости в Пензе и Пензенской области" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
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