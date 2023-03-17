import styles from './Work.module.css';
import React from 'react';

type WorkType = {
    titleProject: string
    description: string
    link: string
}

export const Work = (props: WorkType) => {
    return (
      <a href={props.link}>
          <div className={styles.work}>
              <div>
                  <h2>{props.titleProject}</h2>
                  <div className={styles.description}>{props.description}</div>
              </div>
          </div>
      </a>
    )
}