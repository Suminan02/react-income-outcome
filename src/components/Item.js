import PropTypes from 'prop-types';



// props เขียนได้สองแบบ 
// 1. const Item=({title,amount})=>{return ();};

// 2. const Item=(props)=>{
//    const {title,amount}=props
//    return(); }
const Item=(props)=>{
const {title,amount}=props
  return (
    <ul>
    <li >{title}<span>{amount}</span></li>
    </ul>
  );
}

Item.prototype={
  title:PropTypes.string.isRequired,
  amount:PropTypes.number.isRequired
}
export default Item;