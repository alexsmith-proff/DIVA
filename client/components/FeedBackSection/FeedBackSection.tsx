import Link from 'next/link';
import React from 'react'
import { TypeBtn } from '../../interfaces/enums';
import Btn from '../Btn/Btn';

import s from './FeedBackSection.module.scss'

type FeedBackSectionProps = {}

const FeedBackSection: React.FC<FeedBackSectionProps> = () => {
    return (
        <div className="container">
            <section className={s.feedbackSection}>
                <h3 className={s.text}>Остались вопросы ?</h3>
                <div className={s.btnList}>
                    <div className={s.firstBtn}>
                            <Btn typeBtn={TypeBtn.ToCallPhone}>позвонить нам</Btn>
                    </div>
                    <Btn typeBtn={TypeBtn.ToFeedbackPopup}>оставить заявку</Btn>
                </div>
            </section>

        </div>
    );
};

export default FeedBackSection;