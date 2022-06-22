import Link from 'next/link';
import React from 'react'
import { TypeBtn } from '../../interfaces/enums';

import s from './Btn.module.scss'

type BtnProps = {
    children: React.ReactNode,
    typeBtn: TypeBtn,
}

const Btn: React.FC<BtnProps> = ({ children, typeBtn }) => {
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
                typeBtn == TypeBtn.ToFeedbackPopup &&
                <a className={s.btn}>
                    {children}
                </a>
            }

        </>
    );
};

export default Btn;