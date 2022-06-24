import Link from 'next/link';
import React from 'react'

import s from './Card.module.scss'

type CardProps = {
    children: React.ReactNode,
    rooms: number,
    mainImgUrl: string,
    url: string
}

const Card: React.FC<CardProps> = ({ children, rooms, mainImgUrl, url }) => {
    return (
        <div className={s.card}>
            <div className={s.img}>
                <img src={mainImgUrl} alt="flat-photo" />
                <div className={s.title}>
                    {rooms}-комн. квартира
                </div>
            </div>
            {children}
            <div className={s.btn}>
                <Link href={url}>
                    <a >посмотреть</a>
                </Link>
            </div>
        </div>
    );
};

export default Card;