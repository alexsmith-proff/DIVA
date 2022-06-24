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
                    <Card rooms={item.rooms} mainImgUrl={item.mainImgUrl} url={item.url} key={index}>
                        <div className={s.description}>
                            <ul className={s.listItems}>
                                <li className={s.item}>
                                    <div className={s.itemIco}>
                                        <img src="img/coins-ico.png" alt="coins-ico" />
                                    </div>
                                    <div className={s.itemText}>
                                        {item.price}
                                    </div>
                                    <img className={s.ruble} src="img/ruble.png" alt="ruble-img" />
                                </li>
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
                        </div>
                    </Card>
                ))
            }
        </div>
    );
};

export default SaleCardsList;