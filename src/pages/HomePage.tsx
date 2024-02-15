import s from '../common/styles/HomePage.module.scss';
import { Greetings } from '../components/Greetings';

export const HomePage = () => {
      return (
            <div className={s.home_page}>
                  <Greetings />
            </div>
      );
};
