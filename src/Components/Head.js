import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../Utils/appSlice';
import { YOUTUBE_SUGGESTIONS_API } from '../Utils/Configs';
import { cacheResults } from '../Utils/searchSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    //make api call after every keystroke
    //but if the difference between 2 api calls < 200ms
    //decline the api call
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions(); 
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    //console.log("API call - " + searchQuery);
    
    const data = await fetch(YOUTUBE_SUGGESTIONS_API + searchQuery);

    const json = await data.json();
    
    setSuggestions(json[1]);
    //console.log(json);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery] : json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col w-full sticky top-0 z-50 bg-white">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 p-2 m-2 cursor-pointer"
          alt="menu-icon" 
          src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png" 
        />
        <a href='/'>
          <img 
            className="h-10 p-2 m-2"
            alt="logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png" 
          />
        </a>
      </div>
      <div className="col-span-10 pl-[11rem]">
        <div>
          <input
            className="border border-gray-600 px-5 p-2 my-1 rounded-l-full w-1/2" 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className="border border-red-600 border-double rounded-r-full p-2 text-white bg-red-600" 
            type="Search"
            >
              Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white w-[30.1rem] border border-gray-600 shadow-lg rounded-lg py-2 px-5">
            <ul>
              {
                suggestions.map((s) => (
                  <li key={s} className="py-2 hover:bg-gray-200">{s}</li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex">
        <div>
          <img 
            className="h-12 p-2"
            alt="settings-icon"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA10lEQVR4nO3ZQQqDMBCF4bdyDuEVG49Zm5W9Smn3FmGEboq6KMWX/4OAqJshQ5JHJAAA0IKQNEi6SXrlWJ5LfrPSS7pLmr+MKf+xEBvFfhZtMdPDjmLXcZGBeqDgUQaeBwpe/m2q4IcM1NZaurS2aEVuOXu2pU4m+o2irQ4eqy5bdsyFbBnXfGczswB8BHlYnttSkIflfbSsrYWHJ3lY5OHZqaULeVjk4cnp4LEiDwM4lSAPizwcMjC0drSs5GFxPzxzP3xipbVFK7gfFvfD3b/bEAAA6Ofe6+ZQCoFQYV8AAAAASUVORK5CYII=" 
          />
        </div>
        <div className="">
          <img 
            className="h-12 p-2"
            alt="user-icon" 
            src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" 
          />
        </div>
      </div>
    </div>
  );
};

export default Head