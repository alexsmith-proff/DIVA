import React from 'react'
import Link from 'next/link'

import s from './MainSection.module.scss'
import GetPhoneNum from '../GetPhoneNum/GetPhoneNum';
import Image from 'next/image';

type MainSectionProps = {}

const MainSection: React.FC<MainSectionProps> = () => {
    return (
        <section className={s.section}>
            <div className={s.nav}>
                <div className="container">
                    <div className={s.navWrap}>
                        <Link href="#sale">
                            <a className={s.link}>продажа</a>
                        </Link>
                        <div className={s.circle}>
                            <Link href="/">
                                <a>
                                    <Image className={s.logo} src="/img/logo-main.png" alt="logo" width="105" height="91" />
                                </a>
                            </Link>
                        </div>
                        <Link href="#rent">
                            <a className={s.link}>аренда</a>
                        </Link>
                    </div>
                </div>
            </div>
            <h1 className={s.titleText}>
                Продажа и аренда недвижимости в Пензе<br/>опыт работы более 10 лет
            </h1>
            <GetPhoneNum />
        </section >
    );
};

export default MainSection;