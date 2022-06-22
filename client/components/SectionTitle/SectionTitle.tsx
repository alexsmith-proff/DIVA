import React from 'react'

import s from './SectionTitle.module.scss'

type SectionTitleProps = {
    children: React.ReactNode
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return (
        <>
            <div className={s.sectionTitle}>
                <div className={s.text}>
                    {children}
                </div>
            </div>

        </>
    );
};

export default SectionTitle;