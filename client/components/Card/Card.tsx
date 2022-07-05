import React, { useEffect } from 'react'
import { TypeTransaction } from '../../interfaces/enums'
import ImagesViewer from '../ImagesViewer/ImagesViewer'

import s from './Card.module.scss'

type CardProps = {
    children: React.ReactNode,
    transactionType: TypeTransaction
    rooms: number,
    address: string,
    zone: string,
    price: number,
    description: string,
    photos: string[]
}

const Card: React.FC<CardProps> = ({ children, transactionType, rooms, address, zone, price, description, photos }) => {

    return (
        <div className={s.card}>
            <div className={s.title + ' ' + s.mobile}>
                <div className={s.leftSide}>
                    <h2 className={s.titleText}>{rooms}-комн. квартира</h2>
                    <h3 className={s.address}>{address}</h3>
                    <h3 className={s.zone}>{zone}</h3>
                </div>
                <div className={s.rightSide}>
                    {
                        transactionType == TypeTransaction.Sale &&
                        <>
                            <span className={s.price}>{price}</span>
                            <img className={s.rubleIco} src="img/ruble.png" alt="ruble-ico" />
                        </>
                    }
                    {
                        transactionType == TypeTransaction.Rent &&
                        <>
                            <span className={s.price}>{price} руб/мес</span>
                        </>
                    }
                </div>
            </div>
            <div className={s.cardWrap}>
                <div className={s.photo}>

                    <ImagesViewer photos={photos} mainPhotoNum={0}  widthContent={440} widthBigPhoto={440} heightBigPhoto={260} widthSmallPhoto={60} heightSmallPhoto={60} gapSmallPhoto={5}  />

                </div>
                <div className={s.description}>
                    <div className={s.descriptionTop}>
                        <div className={s.title + ' ' + s.desktop}>
                            <div className={s.leftSide}>
                                <h2 className={s.titleText}>{rooms}-комн. квартира</h2>
                                <h3 className={s.address}>{address}</h3>
                                <h3 className={s.zone}>{zone}</h3>
                            </div>
                            <div className={s.rightSide}>
                                {
                                    transactionType == TypeTransaction.Sale ?
                                        (
                                            <>
                                                <span className={s.price}>{price}</span>
                                                <img className={s.rubleIco} src="img/ruble.png" alt="ruble-ico" />
                                            </>
                                        )
                                        :
                                        (
                                            <>
                                                <span className={s.price}>{price} руб/мес</span>
                                            </>
                                        )
                                }
                            </div>
                        </div>
                        <p className={s.text}>{description}</p>
                    </div>

                    {children}
                </div>
            </div>

        </div>
    );
};

export default Card;