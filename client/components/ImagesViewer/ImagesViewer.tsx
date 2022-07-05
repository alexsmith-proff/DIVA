import React, { useEffect, useState } from 'react'

import s from './ImagesViewer.module.scss'

type ImagesViewerProps = {
    photos: string[],
    mainPhotoNum?: number,
    widthContent: number,
    // widthBigPhoto: number,
    // heightBigPhoto: number,
    widthSmallPhoto: number,
    heightSmallPhoto: number,
    gapSmallPhoto: number
}

const ImagesViewer: React.FC<ImagesViewerProps> = ({ photos, mainPhotoNum, widthContent, widthSmallPhoto, heightSmallPhoto, gapSmallPhoto }) => {
    const [currentPhotoNum, setcurrentPhotoNum] = useState<number>(mainPhotoNum || 0)
    const [activePopup, setActivePopup] = useState<boolean>(false)

    const HandleClick = () => {
        setActivePopup(true)
    }
    const ClosePopup = () => {
        setActivePopup(false)
    }

    useEffect(() => {
        if (activePopup) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "visible"
        }
    }, [activePopup])

    return (
        <div className={s.photo}
            style={{ maxWidth: widthContent + 'px' }}
        >
            <div className={s.mainPhoto}>
                <img src={photos[currentPhotoNum]} alt="main_photo" onClick={() => HandleClick()}
                // style={
                //     { 
                //         width: widthBigPhoto + 'px',
                //         height: heightBigPhoto + 'px',
                //     }
                //     }
                />
            </div>
            <div className={s.smallPhotoList}>
                {
                    photos.map((item, index) => (
                        <div className={s.smallPhoto} style={{ marginRight: gapSmallPhoto + 'px', marginBottom: gapSmallPhoto + 'px' }}>
                            <img src={item} alt="small_photo" onClick={() => setcurrentPhotoNum(index)} key={index} style={{ width: widthSmallPhoto + 'px', height: heightSmallPhoto + 'px' }} />
                        </div>
                    ))
                }
            </div>
            {
                activePopup &&
                (
                    <div className={s.popup + ' ' + s.active}>
                        <div className={s.content + ' ' + s.active} onClick={e => e.stopPropagation()}>
                            <div className={s.popupBigPhoto}>
                                <img src={photos[currentPhotoNum]} alt="main-photo" onClick={() => setcurrentPhotoNum((prev) => prev < photos.length - 1 ? prev + 1 : 0)} />
                            </div>
                            <div className={s.popupSmallPhotoList}>
                                {
                                    photos.map((item, index) => (
                                        <div className={s.popupSmallPhoto}>
                                            <img src={item} alt="small-photo" onClick={() => setcurrentPhotoNum(index)} key={index} />
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={s.closeBtn} onClick={ClosePopup}>x</div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ImagesViewer;