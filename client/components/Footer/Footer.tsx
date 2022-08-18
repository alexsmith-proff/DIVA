
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

import phoneIco from '../../public/img/phone-ico.png'
import emailIco from '../../public/img/email-ico.png'
import logo from '../../public/img/logo.png'

import s from './Footer.module.scss'

type FooterProps = {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className={s.footer}>
            <Link href={'tel:' + '+79631108553'}>
                <a>
                    <div className={s.item + ' ' + s.desktop}>
                        <div className={s.ico}>
                            <Image
                                className={s.ico}
                                alt="phone-ico"
                                src={phoneIco}
                                width='28'
                                height='33'
                                placeholder="blur"
                            />
                        </div>
                        <div className={s.text}>+7(963)110-85-53</div>
                    </div>
                </a>
            </Link>
            <Link href="/">
                <a>
                    <div className={s.logo}>
                        <Image
                            alt="footer-logo"
                            src={logo}
                            width='105'
                            height='91'
                            placeholder="blur"
                        />
                    </div>
                </a>
            </Link>
            <Link href={'mailto:' + 'rieltagent.proff@mail.ru'}>
                <a>
                    <div className={s.item}>
                        <div className={s.ico}>
                            <Image
                                className={s.ico}
                                alt="email-ico"
                                src={emailIco}
                                width='28'
                                height='26'
                                placeholder="blur"
                            />
                        </div>
                        <div className={s.text}>rieltagent.proff@mail.ru</div>
                    </div>
                </a>
            </Link>
            <Link href={'tel:' + '+79631108553'}>
                <a>
                    <div className={s.item + ' ' + s.mobile}>
                        <Image
                            className={s.ico}
                            alt="phone-ico"
                            src={phoneIco}
                            width='5'
                            height='20'
                            placeholder="blur"
                        />
                        <div className={s.text}>+7(963)110-85-53</div>
                    </div>
                </a>
            </Link>
        </footer>
    );
};

export default Footer;