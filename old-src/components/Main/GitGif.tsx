import styles from '../Main/GitGif.module.scss'
import gitGif from '../../assetes/gitHubImg.jpg'
import React, { useEffect, useState } from 'react'
import { Rotate } from 'react-awesome-reveal'
import { Fade } from 'react-awesome-reveal'
import ReactTypingEffect from 'react-typing-effect'

export const GitGif = () => {
    return (
        <div className={styles.gifContainer}>
            <div className={styles.gitGif}>
                <Fade delay={500}>
                    <Rotate duration={2000}>
                        <a target="_blank" href="https://github.com/boevoivertolet">
                            <img className={styles.gitImg} src={gitGif} alt="" />
                        </a>
                    </Rotate>
                </Fade>
            </div>
        </div>
    )
}
