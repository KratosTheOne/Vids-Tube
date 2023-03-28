import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const MenuItems = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);


  if(!isMenuOpen) return (
    <div className="block w-32">
      <section className="">
        <ul className="m-4">
          <li className="mt-10 text-xs">Home</li>
          <li className="mt-10 text-xs">Shorts</li>
          <li className="mt-10 text-xs">Subsciptions</li>
        </ul>
      </section>
      <section className="">
        <ul className="m-4">
          <li className="mt-10 text-xs">Library</li>
          <li className="mt-10 text-xs">History</li>
        </ul>
      </section>
    </div>
  );

  return (
    <div className="block w-52">
      <section className="border-collapse border-b-2 border-gray-200">
        <ul className="m-4">
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
          <li>Subsciptions</li>
        </ul>
      </section>
      <section className="border-collapse border-b-2 border-gray-200">
        <ul className="m-4">
          <li>Library</li>
          <li>History</li>
        </ul>
      </section>
      <section className="border-collapse border-b-2 border-gray-200">
        <p className="m-4">Sign in to like videos,<br/> comment and subscribe.</p>
        <button className="ml-16 mb-4 text-blue-600 font-semibold border border-gray-500 p-2 rounded-full" type="submit">
          Sign In
        </button>
      </section>
      <section className="border-collapse border-b-2 border-gray-200">
        <h3 className="m-2 font-semibold">
          Explore
        </h3>
        <ul className="m-4">
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Films</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sport</li>
          <li>Learning</li>
          <li>Fashion & beauty</li>
        </ul>
      </section>
      <section className="border-collapse border-b-2 border-gray-200">
        <ul className="m-4">
          <li>Browse channels</li>
        </ul>
      </section>
      <section className="border-collapse border-b-2 border-gray-200">
        <h3 className="m-2 font-semibold">
          More from YouTube
        </h3>
        <ul className="m-4">
          <li>Youtube Premium</li>
          <li>Youtube Music</li>
          <li>Youtube Kids</li>
          <li>Youtube TV</li>
        </ul>
      </section>
      <section className="border-collapse border-b-2 border-gray-200">
        <ul className="m-4">
          <li>Settings</li>
          <li>Report History</li>
          <li>Help</li>
          <li>Send feedback</li>
        </ul>
      </section>
    </div>
  )
}

export default MenuItems