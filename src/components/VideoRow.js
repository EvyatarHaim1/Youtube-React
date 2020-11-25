import React from 'react';
import styled from 'styled-components';

function VideoRow({ views, subs, description, timestamp, channel, title, image}) {
    return (
        <Div>
            <img src={image} alt="" />
            <div className="videoRow_title">
                <h3>{title}</h3>
                <p className="videoRow_headline">{channel} • 
                   <span className="videoRow_subs"> 
                      <span className="videoRow_subNumber">{subs}</span>
                       Subscribers
                   </span> {views} views • {timestamp}</p>
                <p className="videoRow_description">{description}</p>
            </div>
        </Div>
    )
}

export default VideoRow;

const Div = styled.div`
display: flex;
margin-bottom: 30px;
max-width: 700px;
img{
    object-fit: fill;
    width: 246px;
    height: 138px;
}
.videoRow_title{
    margin-left: 14px;
}
.videoRow_description{
    margin-top: 20px;
    font-size: 12px;
    color: #606060;
}
.videoRow_headline{
    font-size: 12px;
    color: #606060;
    .videoRow_subs{
        background-color: lightgray;
        padding: 2px;
    }
    .videoRow_subNumber{
       font-weight: bolder;
       color: rgb(84,157,211);
    }
}
`