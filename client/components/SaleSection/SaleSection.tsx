import React from 'react'
import { TypeBtn, TypeColor, TypeTransaction } from '../../interfaces/enums';
import { IFlat } from '../../interfaces/flats';
import Btn from '../Btn/Btn';
import SaleCardsList from '../SaleCardsList/SaleCardsList';
import SectionTitle from '../SectionTitle/SectionTitle';

import s from './SaleSection.module.scss'

const saleFlats: IFlat[] = [
    {
        _id: '1',
        transactionType: TypeTransaction.Sale,
        rooms: 1,
        price: 1750000,
        area: 38,
        curentFloor: 7,
        maxFloor: 10,
        mainImgUrl: 'img/sale1.png',
        url: '/'
    },
    {
        _id: '1',
        transactionType: TypeTransaction.Sale,
        rooms: 2,
        price: 3100000,
        area: 72,
        curentFloor: 3,
        maxFloor: 16,
        mainImgUrl: 'img/sale2.png',
        url: '/'
    },
    {
        _id: '1',
        transactionType: TypeTransaction.Sale,
        rooms: 3,
        price: 5450000,
        area: 96,
        curentFloor: 11,
        maxFloor: 16,
        mainImgUrl: 'img/sale1.png',
        url: '/'
    },
]

type SaleSectionProps = {}

const SaleSection: React.FC<SaleSectionProps> = () => {
    return (
        <div className={s.section}>
            <SectionTitle backgroundColor={TypeColor.white}>
                Продажа
            </SectionTitle>
            <div className="container">
                <SaleCardsList flats={saleFlats} />
                <div className={s.btn}>
                    <Btn longText={true} typeBtn={TypeBtn.ToLink} link="/">
                        Посмотреть все варианты
                    </Btn>
                </div>

            </div>

        </div>
    );
};

export default SaleSection;