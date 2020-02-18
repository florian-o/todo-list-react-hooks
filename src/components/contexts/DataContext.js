import React,{createContext, useReducer,useEffect} from 'react';
// import reducer
import {DataReducer} from '../../reducer/TaskReducer';

export const DataContext = createContext();

const DataContextProvider = (props) =>{

  const [task ,dispatch] = useReducer(DataReducer,[],()=>{

    const saveData = localStorage.getItem('task');

    return saveData ? JSON.parse(saveData) : [];

  });
 
  useEffect(()=>{

    localStorage.setItem('task',JSON.stringify(task))
  },[task])

  return(
  <DataContext.Provider value ={{task , dispatch}}>
      {props.children}
    </DataContext.Provider>
  )
}
export default DataContextProvider;