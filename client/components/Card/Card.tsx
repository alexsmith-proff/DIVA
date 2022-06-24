import Link from 'next/link';
import React from 'react'

import s from './Card.module.scss'

type CardProps = {}

const Card: React.FC<CardProps> = () => {
    return (
        <div className={s.card}>
            <div className={s.img}>
                <img src="img/sale1.png" alt="flat-photo" />
                <div className={s.title}>
                    1-комн. квартира
                </div>
            </div>
            <div className={s.description}>
                <ul className={s.list}>
                    <li className={s.item}>
                        <div className={s.itemIco}>
                            <img src="img/coins-ico.png" alt="coins-ico" />
                        </div>
                        <div className={s.itemText}>
                            1 750 000
                        </div>
                        <img className={s.ruble} src="img/ruble.png" alt="ruble-img" />
                    </li>
                    <li className={s.item}>
                        <div className={s.itemIco}>
                            <img src="img/area-ico.png" alt="area-ico" />
                        </div>
                        <div className={s.itemText}>
                            38 m<span>2</span>
                        </div>
                    </li>
                    <li className={s.item}>
                        <div className={s.itemIco}>
                            <img src="img/floor-ico.png" alt="floor-ico" />
                        </div>
                        <div className={s.itemText}>
                            7/10 эт
                        </div>
                    </li>
                </ul>
            </div>
            <div className={s.btn}>
                <Link href="/">
                    <a >посмотреть</a>
                </Link>
            </div>
        </div>
    );
};

export default Card;