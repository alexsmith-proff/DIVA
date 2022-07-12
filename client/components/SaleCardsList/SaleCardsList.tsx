import React from 'react'
import { TypeTransaction } from '../../interfaces/enums';
import { IFlat } from '../../interfaces/flats';
import Card from '../Card/Card';

import 'react-alice-carousel/lib/alice-carousel.css';

import s from './SaleCardsList.module.scss'
import Image from 'next/image';

type SaleCardsListProps = {
    flats: IFlat[],
}

const SaleCardsList: React.FC<SaleCardsListProps> = ({ flats }) => {
    return (
        <div className={s.list}>
            {
                flats.map((item, index) => (
                    <Card rooms={item.rooms} transactionType={TypeTransaction.Sale} address={item.address} zone={item.zone} price={item.price} description={item.description} photos={item.photosArr} key={index}>
                        <ul className={s.listItems}>
                            <li className={s.item}>
                                <div className={s.itemIco}>
                                    <Image src="/img/area-ico.png" alt="area-ico" width="20" height="20" />
                                </div>
                                <div className={s.itemText}>
                                    {item.area} m<span>2</span>
                                </div>
                            </li>
                            <li className={s.item}>
                                <div className={s.itemIco}>
                                    <Image src="/img/floor-ico.png" alt="floor-ico" width="20" height="20" />
                                </div>
                                <div className={s.itemText}>
                                    {item.curentFloor}/{item.maxFloor} эт
                                </div>
                            </li>
                        </ul>
                    </Card>
                ))
            }
        </div>
    );
};

export default SaleCardsList;