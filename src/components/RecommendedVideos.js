import React from 'react';
import styled from 'styled-components';
import VideoCard from './VideoCard';

function RecommendedVideos() {
    return (
        <Div>
            <h2>Recommended</h2>
            <div className="videosContainer">
                <VideoCard 
                  title="Evyatar Haim - one man band"
                  views="1.7K Views" 
                  timestamp="5 years ago"   
                  channelImg="https://lh3.googleusercontent.com/a-/AOh14Gjz2OP0c6MHetf-DNNRouOW_P-Xy-L5QNEtYqyjpQ=s88-c-k-c0x00ffffff-no-rj-mo"
                  channel="Evyatar Haim"
                  image="https://i.ytimg.com/vi/84MlUM6-8Ak/maxresdefault.jpg"    
                  />
                
                <VideoCard 
                  title="LARRY WHEELS vs SCHOOLBOY LEFT-HANDED AND RIGHT-HANDED SUPERMATCHES"
                  views="2.1M Views" 
                  timestamp="1 month ago"   
                  channelImg="https://yt3.ggpht.com/ytc/AAUvwng-rYeFI-1EU-1QibClsi2SMnpDfrFOvgi6NSqQ=s88-c-k-c0xffffffff-no-rj-mo"
                  channel="Larry Wheels"
                  image="https://i.ytimg.com/vi/Go2-0svsdBM/hqdefault.jpg"    
                  />

                <VideoCard 
                  title="Spanish Phrases While Sleeping"
                  views="1.3K Views" 
                  timestamp="2 months ago"   
                  channelImg="https://yt3.ggpht.com/ytc/AAUvwng-dZTlSWoDMQo0BGx6FNmao0XlhShD20h-IBk6kg=s88-c-k-c0xffffffff-no-rj-mo"
                  channel="Real World Spanish Lessons"
                  image="https://i.ytimg.com/vi/jqXtK9CkDdQ/maxresdefault.jpg"    
                  />

                <VideoCard 
                  title="Learn the MERN Stack - Full Tutorial for Beginners (MongoDB, Express, React, NodeJS) in 12Hrs (2021)"
                  views="106K Views" 
                  timestamp="1 month ago"   
                  channelImg="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s88-c-k-c0xffffffff-no-rj-mo"
                  channel="Clever Programmer"
                  image="https://i.ytimg.com/vi/ktjafK4SgWM/maxresdefault.jpg?v=5f94a8d7"    
                  />

                <VideoCard 
                  title="React + Redux Coding Tutorial - Shopping Cart Checkout Summary Project"
                  views="62K Views" 
                  timestamp="2 years ago"   
                  channelImg="https://yt3.ggpht.com/ytc/AAUvwnjK2xS3Ye7q0tC2fF0rl_Gpv3Mu2oKEHzcPjBSipQ=s88-c-k-c0xffffffff-no-rj-mo"
                  channel="Paul Hanna"
                  image="https://i.ytimg.com/vi/KLCnTjB0w_o/maxresdefault.jpg"    
                  />

                <VideoCard 
                  title="Connecting React Frontend To Express Backend || JavaScript Tutorial"
                  views="920 Views" 
                  timestamp="1 month ago"   
                  channelImg="https://yt3.ggpht.com/ytc/AAUvwnjha9bBczSe_93dA9l49Bb4S_G__iz7gQ9FZ7tJnw=s88-c-k-c0xffffffff-no-rj-mo"
                  channel="Marina Kim"
                  image="https://i.ytimg.com/vi/HjJq1pHxTp4/maxresdefault.jpg"    
                  />

                <VideoCard 
                  title="I Developed My First Ecommerce Website For a Client | Shopify"
                  views="48K Views" 
                  timestamp="1 year ago"   
                  channelImg="https://yt3.ggpht.com/ytc/AAUvwnj7olZX94kuYyZMaNgFoodifIaHPgZUPUkPBzgdVA=s88-c-k-c0xffffffff-no-rj-mo"
                  channel="Andres Vidoza"
                  image="https://i.ytimg.com/vi/nhkc6SuhBR8/maxresdefault.jpg"    
                  />

                <VideoCard 
                  title="10 Most Beautiful Places In The World"
                  views="703.1K Views" 
                  timestamp="1 month ago"   
                  channelImg="https://yt3.ggpht.com/ytc/AAUvwnjoB-hAK7gx79gggFb_7bFs9X8MR69PhY44Mi2P8A=s88-c-k-c0xffffffff-no-rj-mo"
                  channel="Top Trending"
                  image="https://i.ytimg.com/vi/m0iMU57w2_U/hqdefault.jpg"    
                  />
            </div>
        </Div>
    )
}

export default RecommendedVideos;

const Div = styled.div`
flex: 0.8;
background-color: #f9f9f9;
padding: 40px 20px;
padding-bottom: 0;
h2{
    margin-left: 5px;
    margin-bottom: 20px;
}
.videosContainer{
  display: flex;
  flex-wrap: wrap;
}
`