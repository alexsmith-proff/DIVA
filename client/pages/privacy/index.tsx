import React from 'react'
import Head from 'next/head'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import Privacy from '../../components/Privacy/Privacy'

type PrivacyPageProps = {}

const PrivacyPage: React.FC<PrivacyPageProps> = () => {
  return (
    <div>
      <Head>
        <title> Политика конфиденциальности - "ДИВА Недвижимость"</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="keywords" content="недвижимость, пенза, агентство недвижимости, агенство недвижимости, аренда квартиры, покупка жилья, продажа квартиры, договор с агентством, дива" />
        <meta name="description" content="Согласие на обработку персональных данных" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <MainLayout >
          <Privacy />
      </MainLayout>
    </div>
  )
}

export default PrivacyPage