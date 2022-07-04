import Link from 'next/link';
import React, { useEffect } from 'react'

import s from './Card.module.scss'

type CardProps = {
    children: React.ReactNode,
    rooms: number,
    address: string,
    zone: string,
    price: number,
    description: string,
    mainImgPath: string,
    smallImgArrPath: string[]
}

const Card: React.FC<CardProps> = ({ children, rooms, address, zone, price, description, mainImgPath, smallImgArrPath }) => {
    return (
        <div className={s.card}>
            <div className={s.photo}>
                <div className={s.mainPhoto}>
                    <img src={mainImgPath} alt="main_flatphoto" />
                </div>
                <div className={s.smallPhotoList}>
                    {
                        smallImgArrPath.map((item, index) => (
                            <>
                                <img className={s.smallPhoto} src={item} alt="small_flatphoto" key={index} />
                            </>
                        ))
                    }
                </div>
            </div>
            <div className={s.description}>
                <div className={s.descriptionTop}>
                    <div className={s.title}>
                        <div className={s.leftSide}>
                            <h2 className={s.titleText}>{rooms}-комн. квартира</h2>
                            <h3 className={s.address}>{address}</h3>
                            <h3 className={s.zone}>{zone}</h3>
                        </div>
                        <div className={s.rightSide}>
                            <span className={s.price}>{price}</span>
                            <img className={s.rubleIco} src="img/ruble.png" alt="ruble-ico" />
                        </div>
                    </div>
                    <p className={s.text}>{description}</p>
                </div>

                {children}
            </div>
        </div>
    );
};

export default Card;