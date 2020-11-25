import React from 'react';
import styled from 'styled-components';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <Div>
            <div className="searchPage_filter">
                <TuneOutlinedIcon />
                <h2> FILTER </h2>
            </div>
            <hr/>

            <ChannelRow
                      image="https://yt3.ggpht.com/ytc/AAUvwng-rYeFI-1EU-1QibClsi2SMnpDfrFOvgi6NSqQ=s88-c-k-c0xffffffff-no-rj-mo"
                      channel="Larry Wheels"
                      verified
                      subs="1.9K"
                      noOfVideos={382}
                      description="LARRY WHEELS vs SCHOOLBOY LEFT-HANDED AND RIGHT-HANDED SUPERMATCHES"
            />
            <hr />

            <VideoRow
                      views="2.1M Views" 
                      subs="1.4M"
                      description="Visit Team Personal Record for NEW Programs and LIVE Workouts
                      https://teampersonalrecord.com
                      **PROMO: Use coupon code LAUNCH20 for 20% off regular rates!"
                      timestamp="1 month ago"  
                      channel="Larry Wheels"
                      title="LARRY WHEELS vs SCHOOLBOY LEFT-HANDED AND RIGHT-HANDED SUPERMATCHES"
                      image="https://i.ytimg.com/vi/Go2-0svsdBM/hqdefault.jpg"    
            />

            <VideoRow
                      views="35K Views" 
                      subs="1.4M"
                      description="💪 Motivation Playlist 
                      https://bit.ly/2CAxbn2
                     
                     💪 Follow my instagram 
                     https://www.instagram.com/raidenmotiv...
                     
                     💪 Follow my Facebook page
                     https://www.facebook.com/RaidenMotiva...
                     "
                      timestamp="2 month ago"  
                      channel="Larry Wheels"
                      title="WORLDS STRONGEST BODYBUILDER EVER? - LARRY WHEELS MOTIVATION"
                      image="https://gymdietdotblog.files.wordpress.com/2019/07/screenshot_20190718-223239__015998720166275111150.jpg"    
            />

            <VideoRow
                      views="510K Views" 
                      subs="1.4M"
                      description="Visit Team Personal Record for NEW Programs and LIVE Workouts
                      https://teampersonalrecord.com
                      **PROMO: Use coupon code LAUNCH20 for 20% off regular rates!"
                      timestamp="1 week ago"  
                      channel="Larry Wheels"
                      title="BIRTH OF A CHAMPION! KHALED vs MICHAEL TODD ARM WRESTLING!"
                      image="https://i.ytimg.com/vi/c0drxzJrQS0/maxresdefault.jpg"    
            />

            <VideoRow
                      views="196K Views" 
                      subs="1.4M"
                      description="Visit Team Personal Record for NEW Programs and LIVE Workouts
                      https://teampersonalrecord.com
                      **PROMO: Use coupon code LAUNCH20 for 20% off regular rates!"
                      timestamp="2 week ago"  
                      channel="Larry Wheels"
                      title="EXPLOSIVE BANDED DEADLIFTS!"
                      image="https://i.ytimg.com/vi/AUgxM86hGQM/maxresdefault.jpg"    
            />

            <VideoRow
                      views="279K Views" 
                      subs="1.4M"
                      description="Visit Team Personal Record for NEW Programs and LIVE Workouts
                      https://teampersonalrecord.com
                      **PROMO: Use coupon code LAUNCH20 for 20% off regular rates!"
                      timestamp="3 days ago"  
                      channel="Larry Wheels"
                      title="KIRILL SARYCHEV vs LARRY WHEELS ARM WRESTLING!"
                      image="https://external-preview.redd.it/gdNwnc0MGZNLRk8yRhJHrETg22F3AaUusWAYI5M_pF0.jpg?auto=webp&s=9f32ce5a66fcc728288d423f10562d242a7c9cf7"    
            />
            
        </Div>
    )
}

export default SearchPage;

const Div = styled.div`
flex: 0.8;
background-color:#f9f9f9;
padding: 20px 20px;

.searchPage_filter {
    display: flex;
    align-items: center;
    color: #606060;
    font-size: 10px;
    h2{
        margin-left: 10px;
    }
    hr{
        height: 1px;
        border: 0;
        background-color: lightgray;
        margin-top:10px;
        margin-bottom: 10px;
    }
}
`