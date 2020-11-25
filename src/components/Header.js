import React,{ useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

function Header() {

    const [inputSearch, setInputSearch] = useState('');

    return (
        <Div>
            <div className="headerLeft">
                <MenuIcon />
                <Link to="/">
                <img className="header_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
                    alt="youtubeIcon" 
                />
                </Link>
            </div>
            
            <div className="headerInput">
                <input 
                       type="text" 
                       placeholder="Search"
                       value={inputSearch}
                       onChange={(e)=> setInputSearch(e.target.value)} />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="headerInputBtn" />
                </Link>
            </div>

            <div className="headerIcons">
            <VideoCallIcon className="headerIcon" />
            <AppsIcon className="headerIcon" />
            <NotificationsIcon className="headerIcon" />
            <Avatar className="headerIcon"
                    alt="Evyatar Haim"
                    src="https://scontent.ftlv15-1.fna.fbcdn.net/v/t1.0-9/81016903_10157017848126947_5976747459706093568_o.jpg?_nc_cat=111&ccb=2&_nc_sid=84a396&_nc_ohc=IpkijUXYQY4AX-mKBJM&_nc_ht=scontent.ftlv15-1.fna&oh=d617c1becd9eaaaf3e66d1ad99f88e35&oe=5FE0FD6D"
                     />
            </div>
        </Div>
    )
}

export default Header;

const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
position: sticky;
top: 0;
z-index: 100;
background-color: white;

.header_logo{
   height: 25px;
   object-fit: contain;
   margin-left: 20px;
}
.headerInput{
    display: flex;
    align-items: center;
    width: 40%;
    border: 1px solid lightgray;
    input{
        flex: 1;
        border: none;
    }
    .headerInputBtn{
        width: 50px !important;
        background-color: #fafafa;
        border-left: 1px solid lightgray;
        color: gray;
    }
}
.headerIcons{
    display: flex;
    align-items:center;
}
.headerIcon{
    margin-right: 8px;
}
`