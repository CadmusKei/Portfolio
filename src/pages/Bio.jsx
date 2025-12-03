import Nav from "../components/Nav";
import Block from "../components/Block";
import Profile from "../components/Profile";

import profilePic from '../assets/Images/me.png';
import backgroundPic from '../assets/Images/studio-site.jpeg';

function Bio(){
    return (
        <>
            <Nav/>
            <div className={`flex flex-col w-full h-[90rem] bg-cover`} 
            style={{backgroundImage: `url(${backgroundPic})`}}>
            </div>

        </>
    );
}

export default Bio;