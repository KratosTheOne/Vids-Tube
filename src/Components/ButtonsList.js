import React, { useEffect, useState } from 'react';
import { VIDEO_CATEGORIES_LIST } from '../Utils/Configs';
import GlidingButtons from './GlidingButtons';

const ButtonsList = () => {
  
  const [categoryList, setCategoryList] = useState([]);

  const getCategories = async () => {
    
    const data = await fetch(VIDEO_CATEGORIES_LIST);

    const json = await data.json();

    //console.log(json.items);
    
    setCategoryList(json.items);
  };

  useEffect(() => {
    getCategories();
  },[]);
  
  //const buttonNames = ['All', 'Gaming', 'Music', 'Valentines', 'Pop'];
  return (
    <div className="w-[85vw] flex flex-row bg-white overflow-x-scroll">
      {categoryList.map(item =>{
        return <GlidingButtons key={item.id} name={item.snippet.title} />;
      })}
    </div>
  )
}

export default ButtonsList;