import { FC } from 'react';
import s from '../common/styles/PortfolioPage.module.scss';
import { ItemType } from '../data/portfolioItemData';

export const PortfolioItem: FC<IPortfolioItem> = ({ item }) => {
      return (
            <div className={s.portfolio_item}>
                  <div className={s.description}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                  </div>
                  <a target='blank' href='https://it-incubator.io/' title='https://it-incubator.io/'>
                        <img src={item.img} alt='img' />
                  </a>
            </div>
      );
};

interface IPortfolioItem {
      item: ItemType;
}
