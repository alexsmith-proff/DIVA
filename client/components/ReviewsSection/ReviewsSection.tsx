import React from 'react'
import { TypeColor } from '../../interfaces/enums';
import { IReview } from '../../interfaces/reviews';
import ReviewsList from '../ReviewsList/ReviewsList';
import SectionTitle from '../SectionTitle/SectionTitle';

import s from './ReviewsSection.module.scss'

const reviews: IReview[] = [
    {
        _id: '1',
        text: 'Хочу выразить огромную благодарность Ирине. Она очень внимательна к требованиям заказчика, предлагает хорошие варианты, учитывает все пожелания заказчика. Отзывчивый человек. Спасибо Вам огромное, Ирина!!!)))',
        side: 'left-top',
        X: 170,
        Y: 280
    },
    {
        _id: '2',
        text: 'Ирина! Выражаю вам огромную благодарность за качественно проделанную работу. Вы одна из всех других риэлторов, быстро помогли мне решить квартирный вопрос. Квартиру нашли мне за 2 дня. Вы - профессионал с большой буквы и просто очень приятный, добрый и отзывчивый человек. Большое Вам спасибо!',
        side: 'right-top',
        X: 370,
        Y: 240
    },
    {
        _id: '3',
        text: 'Выражаем огромную благодарность в подборе квартиры, а также за помощь при оформлении сделки. Быстро, оперативно. От первого созвона до сделки - 2 недели. Спасибо и больших успехов вам',
        side: 'left-bottom',
        X: 255,
        Y: 530
    },
    {
        _id: '4',
        text: 'Хочется выразить огромную благодарность Ирине Алексеевне за помощь в подборе двухкомнатной квартиры. Мы долго не могли решиться на покупку квартиры. Ирина проконсультировала нас, помогла найти квартиру, также помогла оформить ипотеку, документы на сделку. Если бы не Ирина мы отложили бы покупку еще на долгое время. СПАСИБО БОЛЬШОЕ!!!',
        side: 'right-bottom',
        X: 290,
        Y: 585
    },
]

type ReviewsSectionProps = {}

const ReviewsSection: React.FC<ReviewsSectionProps> = () => {
    return (
        <section className={s.section}>
            <SectionTitle backgroundColor={TypeColor.black}>
                Отзывы о нас
            </SectionTitle>
            <div className="container">
                <ReviewsList reviews={reviews}/>
            </div>
        </section>
    );
};

export default ReviewsSection;