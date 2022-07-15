import Image from 'next/image';
import React from 'react'

import s from './Footer.module.scss'

type FooterProps = {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <footer className={s.footer}>
            <div className={s.item + ' ' + s.desktop}>
                <div className={s.ico}>
                    <Image className={s.ico} src="/img/phone-ico.png" alt="phone-ico" width='28' height='33' />
                </div>

                <div className={s.text}>+7(963)110-85-53</div>
            </div>
            <div className={s.logo}>
                <Image src="/img/logo.png" alt="footer-logo" width='105' height='91' />
            </div>
            <div className={s.item}>
                <div className={s.ico}>
                    <Image className={s.ico} src="/img/email-ico.png" alt="email-ico" width='28' height='26' />
                </div>
                <div className={s.text}>rieltagent.proff@mail.ru</div>
            </div>
            <div className={s.item + ' ' + s.mobile}>
                <Image className={s.ico} src="/img/phone-ico.png" alt="phone-ico" width='28' height='33' />
                <div className={s.text}>+7(963)110-85-53</div>
            </div>
        </footer>
    );
};

export default Footer;