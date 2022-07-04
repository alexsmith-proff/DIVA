import React from 'react'
import { IFlat } from '../../interfaces/flats';
import Card from '../Card/Card';

import s from './SaleCardsList.module.scss'

type SaleCardsListProps = {
    flats: IFlat[],
}

const SaleCardsList: React.FC<SaleCardsListProps> = ({ flats }) => {
    return (
        <div className={s.list}>
            {
                flats.map((item, index) => (
                    <Card rooms={item.rooms} address={item.address} zone={item.zone} price={item.price} description={item.description} mainImgPath={item.mainImgPath} smallImgArrPath={item.smallImgArrPath} key={index}>
                        <ul className={s.listItems}>
                            <li className={s.item}>
                                <div className={s.itemIco}>
                                    <img src="img/area-ico.png" alt="area-ico" />
                                </div>
                                <div className={s.itemText}>
                                    {item.area} m<span>2</span>
                                </div>
                            </li>
                            <li className={s.item}>
                                <div className={s.itemIco}>
                                    <img src="img/floor-ico.png" alt="floor-ico" />
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