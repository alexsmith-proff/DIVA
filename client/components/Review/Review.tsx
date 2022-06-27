import React from 'react'
import { IReview } from '../../interfaces/reviews';

import s from './Review.module.scss'

type ReviewProps = {
    review: IReview,
    isDesktop: boolean, // isDesktop = true - desktop (max-width > 768px); isDesktop = false - mobile (max-width < 768px)
    indexActive?: number,
    index?: number
}

const Review: React.FC<ReviewProps> = ({ review, isDesktop, indexActive, index }) => {
    return (
        <>{
            isDesktop ?
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
                :
                <div className={s.mobile}>
                    {review.text}
                </div>


        }
        </>


    );
};

export default Review;