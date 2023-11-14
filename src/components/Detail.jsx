import { useEffect,useState } from "react";

export default function Detail ({info}){
const [description,setDescription]= useState(null);
const fetchLoad= async() => {
  try{
    if(info===null){
      return
    }
    const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info}.json`);
    if(response.status >=200){
      const result = await response.json();
      setDescription(result)
    }       
  }
  catch(erorr){
    throw new Error(erorr)
  }
}
useEffect(()=>{
  fetchLoad();
},[info])
if(description === null){
  return
}
  return(
   <div className="detail_container">
    <img src={description.avatar} alt="..." />
    <h2>{description.name}</h2>
    <div>{description.details.city}</div>
    <div>{description.details.company}</div>
    <div>{description.details.position}</div>
   </div>
 );
}