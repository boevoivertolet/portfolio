import { useEffect, useState } from 'react'

import s from '../common/styles/ContactsPage.module.scss'
import { MyForm } from '../components/form/MyForm'

export const ContactsPage = () => {
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000)
    }, [])
    return (
        <div className={show ? `${s.contacts_page + ' ' + s.show}` : `${s.contacts_page}`}>
            <h1>Contact with me</h1>
            <div className={s.contacts_block}>
                <MyForm/>
            </div>
        </div>
    )
}
