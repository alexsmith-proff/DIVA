import React from 'react'

import s from './SectionTitle.module.scss'

type SectionTitleProps = {
    children: React.ReactNode,
    noBorder?: boolean // Если noBorder = true, то НЕТ border 
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, noBorder }) => {
    return (
        <>
            <div className={noBorder ? s.sectionTitle : (s.sectionTitle + ' ' + s.border)}>
                <div className={s.text}>
                    {children}
                </div>
            </div>

        </>
    );
};

export default SectionTitle;