

 export default function List ({items,click}){

   return(
    <div className="names_container">
      {items.map((item)=>{
        return(
          <button key={item.id} type='button' onClick={()=>click(item.id)}>
            {item.name}
          </button>
        )
      })}
    </div>
  );
 }