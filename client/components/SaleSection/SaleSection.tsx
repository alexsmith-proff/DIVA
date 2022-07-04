import React from 'react'
import { TypeBtn, TypeColor, TypeTransaction } from '../../interfaces/enums';
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
        price: 1750000,
        area: 38,
        curentFloor: 7,
        maxFloor: 10,
        address: 'ул. Ладожская д. 121',
        zone: 'дальнее Арбеково',
        description: 'В продаже отличная 1 комнатная квартира на 7 этаже площадью 38 м2. В Арбеково по улице Ладожская д. 121. Отличная квартира для молодой семьи.  Балкон застеклен, пластиковые окна во всей квартире, окна выходят в сторону леса, сан узел раздельный в современном кафеле, изолированные комнаты. В квартире хороший качественный ремонт: стены выровнены, проводка новая, на пол стяжка( ламинат 33 класса), новая сантехника, натяжные потолки. Есть все для комфортного проживания. Рядом школы, детские сады, спортивные сооружения, комфортный двор.',
        mainImgPath: 'img/sale1.png',
        smallImgArrPath: ['img/sale-small1.png', 'img/sale-small2.png', 'img/sale-small3.png', 'img/sale-small4.png', 'img/sale-small5.png'],
        BigImgArrPath: ['img/sale-big1.png', 'img/sale-big2.png', 'img/sale-big3.png', 'img/sale-big4.png', 'img/sale-big5.png']
    },
    {
        _id: '2',
        transactionType: TypeTransaction.Sale,
        rooms: 1,
        price: 1750000,
        area: 38,
        curentFloor: 7,
        maxFloor: 10,
        address: 'ул. Ладожская д. 121',
        zone: 'дальнее Арбеково',
        description: 'В продаже отличная 1 комнатная квартира на 7 этаже площадью 38 м2. В Арбеково по улице Ладожская д. 121. Отличная квартира для молодой семьи.  Балкон застеклен, пластиковые окна во всей квартире, окна выходят в сторону леса, сан узел раздельный в современном кафеле, изолированные комнаты. В квартире хороший качественный ремонт: стены выровнены, проводка новая, на пол стяжка( ламинат 33 класса), новая сантехника, натяжные потолки. Есть все для комфортного проживания. Рядом школы, детские сады, спортивные сооружения, комфортный двор.',
        mainImgPath: 'img/sale1.png',
        smallImgArrPath: ['img/sale-small1.png', 'img/sale-small2.png', 'img/sale-small3.png', 'img/sale-small4.png', 'img/sale-small5.png'],
        BigImgArrPath: ['img/sale-big1.png', 'img/sale-big2.png', 'img/sale-big3.png', 'img/sale-big4.png', 'img/sale-big5.png']
    },
    {
        _id: '3',
        transactionType: TypeTransaction.Sale,
        rooms: 1,
        price: 1750000,
        area: 38,
        curentFloor: 7,
        maxFloor: 10,
        address: 'ул. Ладожская д. 121',
        zone: 'дальнее Арбеково',
        description: 'В продаже отличная 1 комнатная квартира на 7 этаже площадью 38 м2. В Арбеково по улице Ладожская д. 121. Отличная квартира для молодой семьи.  Балкон застеклен, пластиковые окна во всей квартире, окна выходят в сторону леса, сан узел раздельный в современном кафеле, изолированные комнаты. В квартире хороший качественный ремонт: стены выровнены, проводка новая, на пол стяжка( ламинат 33 класса), новая сантехника, натяжные потолки. Есть все для комфортного проживания. Рядом школы, детские сады, спортивные сооружения, комфортный двор.',
        mainImgPath: 'img/sale1.png',
        smallImgArrPath: ['img/sale-small1.png', 'img/sale-small2.png', 'img/sale-small3.png', 'img/sale-small4.png', 'img/sale-small5.png'],
        BigImgArrPath: ['img/sale-big1.png', 'img/sale-big2.png', 'img/sale-big3.png', 'img/sale-big4.png', 'img/sale-big5.png']
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
                {/* <div className={s.btn}>
                    <Btn longText={true} typeBtn={TypeBtn.ToLink} link="/">
                        Посмотреть все варианты
                    </Btn>
                </div> */}

            </div>

        </div>
    );
};

export default SaleSection;