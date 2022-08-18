import React from 'react'
import { TypeColor, TypeTransaction } from '../../interfaces/enums';
import { IFlat } from '../../interfaces/flats';
// import Btn from '../Btn/Btn';
import SaleCardsList from '../SaleCardsList/SaleCardsList';
import SectionTitle from '../SectionTitle/SectionTitle';

import s from './SaleSection.module.scss'

const saleFlats: IFlat[] = [
    {
        _id: '1',
        transactionType: TypeTransaction.Sale,
        rooms: 1,
        price: '3 550 000',
        area: 40,
        curentFloor: 10,
        maxFloor: 15,
        address: 'ул. Бородина д. 4',
        zone: 'ближнее Арбеково',
        description: 'Продается однокомнатная квартира в ближнем Арбеково по ул. Бородина. Кирпичный дом, огороженная территория, детская площадка. Отличный район с развитой инфраструктурой. Квартира 40 кв.м, комната 20 кв.м, 10 этаж, не угловая. Отличное состояние. Один совершеннолетний собственник, документы готовы к продаже.',
        photosArr: [
            '/img/sale1_1.jpg',
            '/img/sale1_2.jpg',
            '/img/sale1_3.jpg',
            '/img/sale1_4.jpg',
            '/img/sale1_5.jpg',
            '/img/sale1_6.jpg',
        ]
    },
    // {
    //     _id: '2',
    //     transactionType: TypeTransaction.Sale,
    //     rooms: 1,
    //     price: '1 750 000',
    //     area: 38,
    //     curentFloor: 7,
    //     maxFloor: 10,
    //     address: 'ул. Ладожская д. 121',
    //     zone: 'дальнее Арбеково',
    //     description: 'В продаже отличная 1 комнатная квартира на 7 этаже площадью 38 м2. В Арбеково по улице Ладожская д. 121. Отличная квартира для молодой семьи.  Балкон застеклен, пластиковые окна во всей квартире, окна выходят в сторону леса, сан узел раздельный в современном кафеле, изолированные комнаты. В квартире хороший качественный ремонт: стены выровнены, проводка новая, на пол стяжка( ламинат 33 класса), новая сантехника, натяжные потолки. Есть все для комфортного проживания. Рядом школы, детские сады, спортивные сооружения, комфортный двор.',
    //     photosArr: [
    //         '/img/sale2.jpg',
    //         '/img/sale3.jpg',
    //         '/img/sale1.jpg',
    //         '/img/sale5.jpg',
    //         '/img/sale4.jpg',
    //     ]
    // },
    // {
    //     _id: '3',
    //     transactionType: TypeTransaction.Sale,
    //     rooms: 1,
    //     price: '1 750 000',
    //     area: 38,
    //     curentFloor: 7,
    //     maxFloor: 10,
    //     address: 'ул. Ладожская д. 121',
    //     zone: 'дальнее Арбеково',
    //     description: 'В продаже отличная 1 комнатная квартира на 7 этаже площадью 38 м2. В Арбеково по улице Ладожская д. 121. Отличная квартира для молодой семьи.  Балкон застеклен, пластиковые окна во всей квартире, окна выходят в сторону леса, сан узел раздельный в современном кафеле, изолированные комнаты. В квартире хороший качественный ремонт: стены выровнены, проводка новая, на пол стяжка( ламинат 33 класса), новая сантехника, натяжные потолки. Есть все для комфортного проживания. Рядом школы, детские сады, спортивные сооружения, комфортный двор.',
    //     photosArr: [
    //         '/img/sale9.jpg',
    //         '/img/sale8.jpg',
    //         '/img/sale7.jpg',
    //         '/img/sale5.jpg',
    //         '/img/sale6.jpg',
    //     ]
    // },
]

type SaleSectionProps = {}

const SaleSection: React.FC<SaleSectionProps> = () => {
    return (
        <section className={s.section} id="sale">
            <SectionTitle backgroundColor={TypeColor.white}>
                Продажа
            </SectionTitle>
            <div className="container">
                <SaleCardsList flats={saleFlats} />
            </div>
        </section>
    );
};

export default SaleSection;