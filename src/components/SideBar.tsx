import React,{FC} from 'react';

interface SideBarProps{

}

const SideBar: FC<SideBarProps> = (props)=>{
    return (
        <>
            {props.children}
        </>
    );
}


export default SideBar;