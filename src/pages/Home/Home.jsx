import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import NoTransitionExample from '../../components/corousel/Caurosel';

const Home = () => {
  // State to manage the selected category
  const [category, setCategory] = useState("All");

  return (
    <div>
      <NoTransitionExample />
      
      
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
