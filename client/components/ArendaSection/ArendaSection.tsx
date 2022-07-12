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
        price: 10000,
        residents: TypeResidents.All,
        curentFloor: 7,
        maxFloor: 12,
        address: '3-й проезд Рахманинова д.5',
        zone: 'ближнее Арбеково',
        description: 'Сдаётся отличная однокомнатная квартира в Арбеково. По адресу: 3й проезд Рахманинова 5. В квартире есть всё для комфортного проживания: современный кухонный гарнитур, холодильник, стиральная машина-автомат, в комнате удобный диван, в коридоре вместительный шкаф-купе. Просторная лоджия. Чистый подъезд, спокойные соседи, двор с большой детской площадкой.',
        photosArr: [
            '/img/arenda1_1.jpg',
            '/img/arenda1_2.jpg',
            '/img/arenda1_3.jpg',
            '/img/arenda1_4.jpg',
            '/img/arenda1_5.jpg'
        ]
    },
    {
        _id: '2',
        transactionType: TypeTransaction.Rent,
        rooms: 1,
        price: 9000,
        residents: TypeResidents.All,
        area: 44,
        curentFloor: 3,
        maxFloor: 10,
        address: 'ул. Лядова д.16а',
        zone: 'дальнее Арбеково',
        description: 'В квартире есть всё для комфортного проживания: мебель, бытовая техника. Всё в отличном состоянии. Спокойные соседи, чистый подъезд, огороженная территория.',
        photosArr: [
            '/img/arenda2_1.jpg',
            '/img/arenda2_2.jpg',
            '/img/arenda2_3.jpg',
            '/img/arenda2_4.jpg'
        ]
    },
    // {
    //     _id: '3',
    //     transactionType: TypeTransaction.Rent,
    //     rooms: 1,
    //     price: 1750,
    //     residents: TypeResidents.Students,
    //     area: 38,
    //     curentFloor: 7,
    //     maxFloor: 10,
    //     address: 'ул. Ладожская д. 121',
    //     zone: 'дальнее Арбеково',
    //     description: 'В продаже отличная 1 комнатная квартира на 7 этаже площадью 38 м2. В Арбеково по улице Ладожская д. 121. Отличная квартира для молодой семьи.  Балкон застеклен, пластиковые окна во всей квартире, окна выходят в сторону леса, сан узел раздельный в современном кафеле, изолированные комнаты. В квартире хороший качественный ремонт: стены выровнены, проводка новая, на пол стяжка( ламинат 33 класса), новая сантехника, натяжные потолки. Есть все для комфортного проживания. Рядом школы, детские сады, спортивные сооружения, комфортный двор.',
    //     photosArr: [
    //         '/img/sale2.png',
    //         '/img/sale3.png',
    //         '/img/sale2.png'
    //     ]
    // },
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