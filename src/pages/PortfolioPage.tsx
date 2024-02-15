import s from '../common/styles/PortfolioPage.module.scss';
import { PortfolioItem } from '../components/PortfolioItem';

export const PortfolioPage = () => {
      return (
            <div className={s.portfolio_page}>
                  <div className={s.portfolio_block}>
                        <PortfolioItem />
                  </div>
            </div>
      );
};
