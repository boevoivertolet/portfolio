import { useEffect, useState } from 'react'

import s from '../common/styles/PortfolioPage.module.scss'
import { PortfolioItem } from '../components/PortfolioItem'
import { portfolioItemData } from '../data/portfolioItemData'

export const PortfolioPage = () => {
    const [show, setShow] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1000)
    }, [])
    return (
        <div className={show ? `${s.portfolio_page + ' ' + s.show}` : `${s.portfolio_page}`}>
            <h1>Portfolio</h1>
            <div className={s.portfolio_block}>
                {portfolioItemData.map((el) => (
                    <PortfolioItem item={el} />
                ))}
            </div>
        </div>
    )
}
