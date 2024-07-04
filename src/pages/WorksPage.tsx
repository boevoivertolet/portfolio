import { useEffect, useState } from 'react'

import s from '../common/styles/WorksPage.module.scss'

export const WorksPage = () => {
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000)
    }, [])
    return (
        <div className={show ? `${s.works_page + ' ' + s.show}` : `${s.works_page}`}>
            <h1>My works</h1>
            <div className={s.works_block}></div>
        </div>
    )
}
