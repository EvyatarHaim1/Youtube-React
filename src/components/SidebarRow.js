import React from 'react';
import styled from 'styled-components';

function SidebarRow({ selected, Icon, title}) {
    return (
        <Div selected={selected}>
            <Icon className="sidebarRow_Icon"/>
            <h2 className="sidebarRow_title">{title}</h2>
        </Div>
    )
}

export default SidebarRow;

const Div = styled.div`
display: flex;
align-items: center;
padding: 10px 20px;

${props => props.selected && `
    background-color: lightgray;
    &${Div} > .sidebarRow_title {font-weight: bold;}
    &${Div} > .sidebarRow_Icon {color: red;}

    `}
:hover{
    background-color: lightgray;
    cursor: pointer;
    .sidebarRow_Icon{
        color: red;
    }
    .sidebarRow_title{
        font-weight: bold;
    }
}
.sidebarRow_Icon{
    color: #606060;
    font-size: large !important;
}

.sidebarRow_title{
   flex: 1;
   margin-left: 20px;
   font-size: 12px;
   font-weight: 500;
}`
