import numeral from 'numeral';
import './index.css';
const value = numeral(1000).format('$0,00.00');
/* eslint-disable no-console*/
console.log('the value of the course is '+ value);
