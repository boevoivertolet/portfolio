import React from 'react';
import styles from './BarItem.module.css';


export const BarItem = (props: BarItem) => {
    return (
       <a href={props.link} target="_blank">
           <div id={props.id}  className = {styles.barItem}>
               <i className = {props.class}></i>
               {/*<span>{props.title}</span>*/}
           </div>
       </a>

    )
}
type BarItem ={
    title: string
    class: string
    id: string
    link: string
}