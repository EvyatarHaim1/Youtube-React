import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Div className="App">
      <Router>
         <Header />

         <Switch>
           <Route path="/search/:searchTerm">
              <div className="app_page">
                 <Sidebar />
                 <SearchPage />
              </div>
           </Route>

           <Route path="/">
              <div className="app_page">
                 <Sidebar />
                 <RecommendedVideos />
              </div>
           </Route>
         </Switch>
      </Router>
     
    </Div>
  );
}

export default App;

const Div = styled.div`
.app_page {
  display: flex;
}
`