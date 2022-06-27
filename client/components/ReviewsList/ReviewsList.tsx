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
            setIndexActive(prev =>  prev < reviews.length - 1 ? prev + 1 : 0)
        }, 10000)
    }, [])
    return (
        <div>
            {
                reviews.map((item, index) => <Review review={item} indexActive={indexActive} key={item._id} index={index} />)
            }
        </div>
    );
};

export default ReviewsList;