import Item from "./Item";
import './Transection.css';
import {v4 as uuidv4} from 'uuid';

const Transection=()=>{
  const data=[
    {title:"ค่ารักษาพยาบาล", amount:"2000"},
    {title:"ค่ารักษาพยาบาล", amount:"2000"},
    {title:"ค่ารักษาพยาบาล", amount:"2000"}
  ]
  return(
    <ul className="item-list"> 
      {data.map((element)=>{
        //return <Item title={element.title} amount={element.amount}/> แบบนี้ก็ได้แต่สามารถทำได้อีกแบบ
       return <Item {...element} key={uuidv4()}/>
      })}
    </ul>
  )
};

export default Transection;