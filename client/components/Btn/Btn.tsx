import Link from 'next/link';
import React from 'react'
import { TypeBtn } from '../../interfaces/enums';

import s from './Btn.module.scss'

type BtnProps = {
    children: React.ReactNode,
    longText?: boolean,
    typeBtn: TypeBtn,
    link?: string,
    setActive?: (isActive: boolean) => void
}

const Btn: React.FC<BtnProps> = ({ children, longText, typeBtn, link, setActive }) => {
    return (
        <>
            {
                typeBtn == TypeBtn.ToCallPhone &&
                <Link href={'tel:' + '+79631108553'}>
                    <a className={s.btn}>
                        {children}
                    </a>
                </Link>
            }
            {
                typeBtn == TypeBtn.ToLink &&
                <Link href={link}>
                    <a className={longText ? (s.btn + ' ' + s.longText) : s.btn}>
                        {children}
                    </a>
                </Link>
            }
            {
                typeBtn == TypeBtn.ToFeedBackPopup &&
                <a className={s.btn} onClick={() => setActive(true)} >
                    {children}
                </a>
            }

        </>
    );
};

export default Btn;