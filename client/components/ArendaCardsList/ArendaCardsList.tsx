import Image from 'next/image';
import React from 'react'
import { TypeTransaction } from '../../interfaces/enums';
import { IFlat } from '../../interfaces/flats';
import Card from '../Card/Card';

import s from './ArendaCardsList.module.scss'

type ArendaCardsListProps = {
    flats: IFlat[],
}

const ArendaCardsList: React.FC<ArendaCardsListProps> = ({ flats }) => {
    return (
        <div className={s.list}>
            {
                flats.map((item, index) => (
                    <Card rooms={item.rooms} transactionType={TypeTransaction.Rent} address={item.address} zone={item.zone} price={item.price} description={item.description} photos={item.photosArr} key={index}>
                            <ul className={s.listItems}>
                                <li className={s.item}>
                                    <div className={s.itemIco}>
                                        <Image src="/img/floor-ico.png" alt="floor-ico" width="20" height="20" />
                                    </div>
                                    <div className={s.itemText}>
                                        {item.curentFloor}/{item.maxFloor} эт
                                    </div>
                                </li>
                                <li className={s.item}>
                                    <div className={s.itemIco}>
                                        <Image src="/img/residents-ico.png" alt="residents-ico" width="20" height="20" />
                                    </div>
                                    <div className={s.itemText}>
                                        {item.residents}
                                    </div>
                                </li>
                            </ul>
                    </Card>
                ))
            }
        </div>
    );
};

export default ArendaCardsList;