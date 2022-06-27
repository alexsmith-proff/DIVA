import React, from 'react'
import { IReview } from '../../interfaces/reviews';

import s from './Review.module.scss'

type ReviewProps = {
    review: IReview,
    indexActive: number,
    index: number
}

const Review: React.FC<ReviewProps> = ({ review, indexActive, index }) => {
    return (
        <>
            {
                review.side == 'left-top' &&
                <div className={(s.review + ' ' + s.left + ' ' + s.top) + (index == indexActive ? ' ' + s.active : '')} style={{ left: review.X, top: review.Y }}>
                    {review.text}
                </div>
            }
            {
                review.side == 'right-top' &&
                <div className={(s.review + ' ' + s.right + ' ' + s.top) + (index == indexActive ? ' ' + s.active : '')} style={{ left: review.X, top: review.Y }}>
                    {review.text}
                </div>
            }
            {
                review.side == 'left-bottom' &&
                <div className={(s.review + ' ' + s.left + ' ' + s.bottom) + (index == indexActive ? ' ' + s.active : '')} style={{ left: review.X, top: review.Y }}>
                    {review.text}
                </div>
            }
            {
                review.side == 'right-bottom' &&
                <div className={(s.review + ' ' + s.right + ' ' + s.bottom) + (index == indexActive ? ' ' + s.active : '')} style={{ left: review.X, top: review.Y }}>
                    {review.text}
                </div>
            }
        </>


    );
};

export default Review;