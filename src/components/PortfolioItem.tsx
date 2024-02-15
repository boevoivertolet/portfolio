import incImage from '../assets/img/it_incubator_cover.png';
import s from '../common/styles/PortfolioPage.module.scss';

export const PortfolioItem = () => {
      return (
            <a target='blank' href='https://it-incubator.io/'>
                  <div className={s.portfolio_item}>
                        <img src={incImage} alt='img' />
                  </div>
            </a>
      );
};
