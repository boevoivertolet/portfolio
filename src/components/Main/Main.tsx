import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../../common/styles/Container.module.css'


function Main() {
    return (
        <div className = {styles.main}>
            <div className = {`${styles.mainContainer} ${styleContainer.container}`}>
                <div className = {styles.mainText}>
                    <h1>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eius mollitia nemo quos soluta? Animi consequuntur id itaque laboriosam, magnam minus optio quia quibusdam reiciendis repellat? Aspernatur fugit pariatur quaerat tempora vel. Commodi cumque eos fugit id itaque, minima obcaecati, quaerat, quibusdam quidem quis ratione recusandae rem sed sequi soluta! Accusantium asperiores dignissimos dolor minus modi natus nihil nulla quod. Iusto, natus, quia? Consectetur dolores ipsum molestiae numquam tenetur. Architecto commodi error facere facilis impedit maxime molestiae nesciunt perspiciatis repellendus sit. Ducimus labore non odit temporibus. Aperiam cumque eaque et explicabo laboriosam modi molestiae, nisi, pariatur quibusdam sapiente sit voluptatum?
                    </h1>
                </div>

            </div>
        </div>
    );
}

export default Main;