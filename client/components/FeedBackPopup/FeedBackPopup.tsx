import React from 'react'

import s from './FeedBackPopup.module.scss'

type FeedBackPopupProps = {
    children?: React.ReactNode
    active: boolean,
    setActive: (isActive) => void
}

const FeedBackPopup: React.FC<FeedBackPopupProps> = ({ active, setActive, children }) => {
    return (
        <div className={active ? (s.FeedBackPopup + ' ' + s.active) : s.FeedBackPopup} onClick={() => setActive(false)}>
            <div className={active ? (s.content + ' ' + s.active) : s.content} onClick={e => e.stopPropagation()}>
                {
                    !children &&
                    <>
                        <div>Здесь должна быть форма обратной связи</div>
                    </>
                }

                {children}

            </div>
        </div>
    );
};

export default FeedBackPopup;