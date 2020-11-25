import React from 'react';
import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';

function VideoCard({ image, title, channel, views, timestamp, channelImg }) {
    return (
        <Div>
            <img className="videoImg" src={image} alt=""/>
            <div className="videoInfo">
               <Avatar className="videoAvatar" alt={channel} src={channelImg} />
               <div className="videoText">
                  <h4>{title}</h4>
                  <p>{channel}</p>
                  <p>
                      {views} • {timestamp}
                  </p>
               </div>
            </div>
        </Div>
    )
}

export default VideoCard;

const Div = styled.div`
    width: 270px;
    margin-bottom: 40px;
.videoImg{
    height: 140px;
    width: 250px;
}

.videoInfo{
    display: flex;
    margin-top: 10px;
    padding-right: 30px;
}

.videoText{
    margin-left: 15px;
    p{
        font-size: 14px;
        color: gray;
    }
}
h4{
    font-size: 14px;
    margin-bottom: 5px;
}
.videoAvatar{
    height: 30px !important; 
    width: 30px !important; 
}
`