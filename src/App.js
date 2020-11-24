import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';


function App() {
  return (
    <Div className="App">
     <Header />
     <div className="app_page">
     <Sidebar />
     <RecommendedVideos />
     </div>
    </Div>
  );
}

export default App;

const Div = styled.div`
.app_page {
  display: flex;
}
`