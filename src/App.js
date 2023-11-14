import './App.css';
import List from './components/List';
import Detail from "./components/Detail";
import { useEffect,useState } from "react";
function App() {
  const [names,setNames] = useState([]);
  const [info,setinfo] = useState(null);
  const fetchData= async() => {
    try{
      const response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json');
      if(response.status >=200){
        const result = await response.json();
        setNames(result)
      }       
    }
    catch(erorr){
      throw new Error(erorr)
    }
  }
useEffect(()=>{
  fetchData()
},[])
function onClickName(id){
setinfo(id)
}
  return (
    <div className='container'>
    <List
    items={names}
    click = {onClickName}/>
    <Detail
    info={info}/>
    </div>
  );
}

export default App;
