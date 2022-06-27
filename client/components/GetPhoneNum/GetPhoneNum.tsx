import React from 'react'
import Link from 'next/link'

import s from './GetPhoneNum.module.scss'

type GetPhoneNumProps = {}

const GetPhoneNum: React.FC<GetPhoneNumProps> = () => {
    return (
        <div className={s.wrap}>
            <div className={s.getPhoneNum}>
                <input className={s.input} type="text" value="Номер телефона *" />
                {/* <div className={s.btnWrap}> */}
                <Link href="/">
                    <a className={s.btn}>получить консультацию</a>
                </Link>
                {/* </div> */}
            </div>
        </div>

    );
};

export default GetPhoneNum;