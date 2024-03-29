import React, { useState } from 'react'
import { TypeBtn, TypePopup } from '../../interfaces/enums';
import Btn from '../Btn/Btn';
import FeedBackPopup from '../FeedBackPopup/FeedBackPopup';

import s from './FeedBackSection.module.scss'

type FeedBackSectionProps = {}

const FeedBackSection: React.FC<FeedBackSectionProps> = () => {
    const [activeFeedBackPopup, setActiveFeedBackPopup] = useState<boolean>(false)
    return (
        <section>
            {/* Добавляем FeedBackPopup чтобы не прокидывать пропсы из index */}
            <FeedBackPopup active={activeFeedBackPopup} setActive={setActiveFeedBackPopup} typePopup={TypePopup.FeedBack}/>
            <div className="container">
                <section className={s.feedbackSection}>
                    <h3 className={s.text}>Остались вопросы ?</h3>
                    <div className={s.btnList}>
                        <div className={s.firstBtn}>
                            <Btn typeBtn={TypeBtn.ToCallPhone}>позвонить нам</Btn>
                        </div>
                        <Btn typeBtn={TypeBtn.ToFeedBackPopup} setActive={setActiveFeedBackPopup}>оставить заявку</Btn>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default FeedBackSection;