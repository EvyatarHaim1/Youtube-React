import React from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar';

function Header() {
    return (
        <Div>
            <MenuIcon />
            <img className="header_logo"
                 src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                 alt="youtubeIcon" />
            <input type="text" />
            <SearchIcon />
            <VideoCallIcon />
            <AppsIcon />
            <NotificationsIcon />
            <Avatar
                    alt="Evyatar Haim"
                    src="https://scontent.ftlv15-1.fna.fbcdn.net/v/t1.0-9/81016903_10157017848126947_5976747459706093568_o.jpg?_nc_cat=111&ccb=2&_nc_sid=84a396&_nc_ohc=IpkijUXYQY4AX-mKBJM&_nc_ht=scontent.ftlv15-1.fna&oh=d617c1becd9eaaaf3e66d1ad99f88e35&oe=5FE0FD6D"
                     />
        </Div>
    )
}

export default Header;

const Div = styled.div`
display: flex;
align-items: center;

.header_logo{
   height: 25px;
   object-fit: contain;
}`