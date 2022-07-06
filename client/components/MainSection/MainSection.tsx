import React from 'react'
import Link from 'next/link'
import TopNav from '../TopNav/TopNav';

import s from './MainSection.module.scss'
import GetPhoneNum from '../GetPhoneNum/GetPhoneNum';

type MainSectionProps = {}

const MainSection: React.FC<MainSectionProps> = () => {
    return (
        <div className={s.section}>
            <div className={s.nav}>
                <div className="container">
                    <div className={s.navWrap}>
                        <Link href="#sale">
                            <a className={s.link}>продажа</a>
                        </Link>
                        <div className={s.circle}>
                            <Link href="/">
                                <a>
                                    <img className={s.logo} src="img/logo-main.png" alt="logo" />
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
                Продажа и аренда недвижимости в пензе<br/>опыт работы более 10 лет
            </h1>
            <GetPhoneNum />
        </div >
    );
};

export default MainSection;