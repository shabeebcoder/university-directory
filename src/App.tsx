import React from 'react';
import data from "./data.json"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListPage from "./pages/List"
import DetailsPage from "./pages/Details"
import Notfound from './pages/Notfound';
import axios from "axios";

function App() {

  const [university, setUniversity]: any = React.useState([]);
  const URL = 'http://universities.hipolabs.com/search';
  const CACHE_KEY = 'universitiesData'

  const fetchData = async () => {
    try {
      const response = await axios.get(URL, {
        params: {
          country: 'United Arab Emirates'
        }
      });
      const data = response.data;
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
      setUniversity(data)
      return data;
    } catch (error) {
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData) {
        setUniversity(JSON.parse(cachedData))
        return JSON.parse(cachedData);
      } else {
        throw new Error('Failed to fetch data from API and no cached data available');
      }
    }
  };

  React.useEffect(() => {
    fetchData()
      .then(data => {
        console.log('Data:', data);
      })
      .catch(error => {
        console.error('Error:', error.message);
      });
  }, [data])

  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" Component={() => <ListPage items={university} />} />
        <Route path="/details/:itemId" Component={() => <DetailsPage items={university} />} />
        <Route path='*' Component={Notfound} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
