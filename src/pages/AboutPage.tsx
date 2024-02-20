import { useEffect, useState } from 'react';

import s from '../common/styles/AboutPage.module.scss';

export const AboutPage = () => {
      const [show, setShow] = useState<boolean>(false);

      useEffect(() => {
            setTimeout(() => {
                  setShow(true);
            }, 1000);
      }, []);
      return (
            <div className={show ? `${s.about_page + ' ' + s.show}` : `${s.about_page}`}>
                  <h1>About Me</h1>
                  <div className={s.about_block}></div>
            </div>
      );
};
