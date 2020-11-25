import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import VerifiedIcon from '@material-ui/icons/CheckCircleOutline';

function ChannelRow({ image, channel, subs, noOfVideos, verified, description}) {
    return (
        <Div>
            <Avatar className="channelAvatar"
                    alt={channel} src={image} 
            />
            <div className="channelRow_text">
                 <h4>{channel}{verified && <VerifiedIcon />} </h4>
                 <p> {subs} subscribers • {noOfVideos} videos </p>
                 <p> {description} </p>
            </div>
        </Div>
    )
}

export default ChannelRow;

const Div = styled.div`
display: flex;
align-items: center;
width: 70%;
.channelRow_text{
    display: flex;
    flex-direction: column;
    p{
        color: #606060;
        font-size: small !important;    
    }
    h4{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}
.channelAvatar{
    height: 120px !important;
    width: 120px !important;
    margin: 10px 60px;
}
`