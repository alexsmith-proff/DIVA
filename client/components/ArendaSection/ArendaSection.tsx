import React from 'react'
import { TypeBtn, TypeColor, TypeRoomers, TypeTransaction } from '../../interfaces/enums';
import { IFlat } from '../../interfaces/flats';
import ArendaCardsList from '../ArendaCardsList/ArendaCardsList';
import Btn from '../Btn/Btn';
import SectionTitle from '../SectionTitle/SectionTitle';

import s from './ArendaSection.module.scss'

const arendaFlats: IFlat[] = [
    {
        _id: '1',
        transactionType: TypeTransaction.Sale,
        rooms: 1,
        price: 1750000,
        roomers: TypeRoomers.All,
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
        roomers: TypeRoomers.Females,
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
        roomers: TypeRoomers.Male,
        curentFloor: 11,
        maxFloor: 16,
        mainImgUrl: 'img/sale1.png',
        url: '/'
    },
]

type ArendaSectionProps = {}

const ArendaSection: React.FC<ArendaSectionProps> = () => {
    return (
        <div className={s.section}>
            <SectionTitle backgroundColor={TypeColor.black}>
                Аренда
            </SectionTitle>
            <div className="container">
                <ArendaCardsList flats={arendaFlats} />
                <div className={s.btn}>
                    <Btn longText={true} typeBtn={TypeBtn.ToLink} link="/">
                        Посмотреть все варианты
                    </Btn>
                </div>

            </div>

        </div>
    );
};

export default ArendaSection;