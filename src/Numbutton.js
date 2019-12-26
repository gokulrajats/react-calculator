import React from 'react';
import App from './App';
function Numbutton(props){
    
    if(props.values%3===0 && props.values!== 0){
    
        return(
        <div className='rows'>  
            <div className='row'>
            <button onClick ={handleClick} value={props.values} style={{height:'50px', width:'50px' ,border :'2px dotted blue'}}>
                {props.values+''}
            </button>
       </div>
       
    </div>
                
    
                );
    }
      else{
            return(
            
            <div>
                
            <button onClick ={handleClick} value={props.values} style={{height:'50px', width:'50px' ,border :'2px dotted blue'}}>
         {props.values+''}
       </button>
       
       
                </div>
        );
        
    }
    function handleClick(e){
       return( <App  text={e.target.value}/>);
    }
    
}
export default Numbutton ;