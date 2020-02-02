import React from 'react';
import css from './Statistic.module.css';
import PropTypes from 'prop-types';

const getColor = (x) =>{
        let r = Math.floor(Math.random() * (x));
        let g = Math.floor(Math.random() * (x));
        let b = Math.floor(Math.random() * (x));
        let color = `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
        return color;
}
const Statistic = ({stats, title, colors}) => {
    console.log(stats, title, colors)
    let color = getColor(256);
// console.log(color)
    const listItem = stats.map(item=>
    <li key={item.id} className={css.item} style={{backgroundColor:color}}>
      <span className={css.label}>{item.label}</span>
      <span className={css.percentage}>{item.percentage}%</span>
    </li> 
    );
    console.log(listItem)
 return (
  <section className={css.statistics}>
    {title &&
       (<h2 className={css.title}>{title}</h2>)
    }
    <ul className={css.stat_list}>
        {listItem}
    </ul>
  </section>
 );
};

Statistic.defaultProp={
    title: ""
};
Statistic.propTypes = {
    stats: PropTypes.array.isRequired,
    title: PropTypes.string
};
export default Statistic;