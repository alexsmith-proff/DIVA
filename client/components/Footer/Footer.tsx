import React from 'react'

import s from './Footer.module.scss'

type FooterProps = {}

const Footer: React.FC<FooterProps> = () => {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.item + ' ' + s.desktop}>
                    <img className={s.ico} src="img/phone-ico.png" alt="phone-ico" />
                    <div className={s.text}>+7(963)110-85-53</div>
                </div>
                {/* <div className={s.logo}> */}
                    <img className={s.logo} src="img/logo.png" alt="footer-logo" />
                {/* </div> */}
                <div className={s.item}>
                    <img className={s.ico} src="/img/email-ico.png" alt="email-ico" />
                    <div className={s.text}>rieltagent.proff@mail.ru</div>
                </div>
                <div className={s.item + ' ' + s.mobile}>
                    <img className={s.ico} src="img/phone-ico.png" alt="phone-ico" />
                    <div className={s.text}>+7(963)110-85-53</div>
                </div>
            </footer>

        </>
    );
};

export default Footer;