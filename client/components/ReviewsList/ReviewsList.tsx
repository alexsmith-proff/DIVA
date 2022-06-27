import React, { useEffect, useState } from 'react'
import { IReview } from '../../interfaces/reviews';
import Review from '../Review/Review';

import s from './ReviewsList.module.scss'

type ReviewsListProps = {
    reviews: IReview[],
}

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
    const [indexActive, setIndexActive] = useState<number>(0)
    useEffect(() => {
        setInterval(() => {
            setIndexActive(prev => prev < reviews.length - 1 ? prev + 1 : 0)
        }, 10000)
    }, [])
    return (
        <>
            <div className={s.desktop}>
                {
                    reviews.map((item, index) => <Review isDesktop={true} review={item} indexActive={indexActive} key={item._id} index={index} />)
                }
            </div>
            <div className={s.mobile}>
                <div className={s.wrap}>
                    {
                        reviews.map((item) => <Review review={item} isDesktop={false} key={item._id} />)
                    }
                </div>

            </div>
        </>
    );
};

export default ReviewsList;