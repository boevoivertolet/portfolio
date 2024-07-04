import { FC } from 'react'
import s from '../common/styles/PortfolioPage.module.scss'
import { ItemType } from '../data/portfolioItemData'

export const PortfolioItem: FC<IPortfolioItem> = ({ item }) => {
    return (
        <div className={s.portfolio_item}>
            <div className={s.description}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
            <a target="blank" href={item.link} title={item.link}>
                <img src={item.img} alt="img" />
            </a>
        </div>
    )
}

interface IPortfolioItem {
    item: ItemType
}
