import React,{FC} from 'react';

interface NavBarProps{
    searchBar ?: boolean;
}

const NavBar:FC<NavBarProps> = (props) => { 
    return (
        <>
            <span>Company</span>
            <input type="text" />
            <span>👀</span>
            <span>🤣</span>
            <span>😜</span>
        </>
    );
}

export default NavBar;