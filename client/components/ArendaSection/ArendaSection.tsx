import React from 'react'
import { TypeColor, TypeResidents, TypeTransaction } from '../../interfaces/enums';
import { IFlat } from '../../interfaces/flats';
import ArendaCardsList from '../ArendaCardsList/ArendaCardsList';
import Btn from '../Btn/Btn';
import SectionTitle from '../SectionTitle/SectionTitle';

import s from './ArendaSection.module.scss'

const arendaFlats: IFlat[] = [
    {
        _id: '1',
        transactionType: TypeTransaction.Rent,
        rooms: 1,
        price: 7500,
        residents: TypeResidents.All,
        curentFloor: 7,
        maxFloor: 10,
        address: 'ул. Ладожская д. 121',
        zone: 'дальнее Арбеково',
        description: 'В продаже отличная 1 комнатная квартира на 7 этаже площадью 38 м2. В Арбеково по улице Ладожская д. 121. Отличная квартира для молодой семьи.  Балкон застеклен, пластиковые окна во всей квартире, окна выходят в сторону леса, сан узел раздельный в современном кафеле, изолированные комнаты. В квартире хороший качественный ремонт: стены выровнены, проводка новая, на пол стяжка( ламинат 33 класса), новая сантехника, натяжные потолки. Есть все для комфортного проживания. Рядом школы, детские сады, спортивные сооружения, комфортный двор.',
        photosArr: [
            'img/sale1.png',
            'img/sale2.png',
            'img/sale3.png'
        ]
    },
    {
        _id: '2',
        transactionType: TypeTransaction.Rent,
        rooms: 1,
        price: 1750,
        residents: TypeResidents.Female,
        area: 38,
        curentFloor: 7,
        maxFloor: 10,
        address: 'ул. Ладожская д. 121',
        zone: 'дальнее Арбеково',
        description: 'В продаже отличная 1 комнатная квартира на 7 этаже площадью 38 м2. В Арбеково по улице Ладожская д. 121. Отличная квартира для молодой семьи.  Балкон застеклен, пластиковые окна во всей квартире, окна выходят в сторону леса, сан узел раздельный в современном кафеле, изолированные комнаты. В квартире хороший качественный ремонт: стены выровнены, проводка новая, на пол стяжка( ламинат 33 класса), новая сантехника, натяжные потолки. Есть все для комфортного проживания. Рядом школы, детские сады, спортивные сооружения, комфортный двор.',
        photosArr: [
            'img/sale3.png',
            'img/sale1.png',
            'img/sale3.png'
        ]
    },
    {
        _id: '3',
        transactionType: TypeTransaction.Rent,
        rooms: 1,
        price: 1750,
        residents: TypeResidents.Students,
        area: 38,
        curentFloor: 7,
        maxFloor: 10,
        address: 'ул. Ладожская д. 121',
        zone: 'дальнее Арбеково',
        description: 'В продаже отличная 1 комнатная квартира на 7 этаже площадью 38 м2. В Арбеково по улице Ладожская д. 121. Отличная квартира для молодой семьи.  Балкон застеклен, пластиковые окна во всей квартире, окна выходят в сторону леса, сан узел раздельный в современном кафеле, изолированные комнаты. В квартире хороший качественный ремонт: стены выровнены, проводка новая, на пол стяжка( ламинат 33 класса), новая сантехника, натяжные потолки. Есть все для комфортного проживания. Рядом школы, детские сады, спортивные сооружения, комфортный двор.',
        photosArr: [
            'img/sale2.png',
            'img/sale3.png',
            'img/sale2.png'
        ]
    },
]

type ArendaSectionProps = {}

const ArendaSection: React.FC<ArendaSectionProps> = () => {
    return (
        <div className={s.section} id="rent">
            <SectionTitle backgroundColor={TypeColor.black}>
                Аренда
            </SectionTitle>
            <div className="container">
                <ArendaCardsList flats={arendaFlats} />
            </div>

        </div>
    );
};

export default ArendaSection;