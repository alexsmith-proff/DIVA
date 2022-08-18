import Image from 'next/image'
import React, { useEffect } from 'react'
import { TypeTransaction } from '../../interfaces/enums'
import ImagesViewer from '../ImagesViewer/ImagesViewer'
import RubleImg from '../../public/img/ruble.png'

import s from './Card.module.scss'

type CardProps = {
    children: React.ReactNode,
    transactionType: TypeTransaction
    rooms: number,
    address: string,
    zone: string,
    price: string,
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
                            <div className={s.rubleIco}>
                                <Image
                                alt="ruble-ico"
                                src={RubleImg}
                                width="20"
                                height="20"
                                placeholder="blur"
                            />
                            </div>
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
                    <ImagesViewer photos={photos} mainPhotoNum={0} widthContent={440} widthSmallPhoto={60} heightSmallPhoto={60} gapSmallPhoto={5} />
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
                                                <div className={s.rubleIco}>
                                                    <Image
                                                        className={s.rubleIco}
                                                        alt="ruble-ico"
                                                        src={RubleImg}
                                                        width="20"
                                                        height="20"
                                                        placeholder="blur"
                                                    />
                                                </div>

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