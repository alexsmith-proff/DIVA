import React from 'react'

import s from './Partner.module.scss'

type PartnerProps = {
    path: string
}

const Partner: React.FC<PartnerProps> = ({path}) => {
    return (
        <div className={s.partner}>
            <img className={s.partnerImg} src={path} alt="partner-img" />
            
        </div>
    );
};

export default Partner;