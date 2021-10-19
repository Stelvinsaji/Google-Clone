import React from 'react';
import './Home.css';
import {Link} from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import Search from "./components/Search";

function Home() {

    return (
        <div className='home'>
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home_headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar
                        src="https://cdn.mos.cms.futurecdn.net/nuhXezuwji5EEatJvoqqYZ.jpg"
                        style={{border: "1px solid gray"}}
                    />
                </div>
            </div>
            <div className="home_body">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
                    alt=""/>
                <div className="home_inputContainer">
                    {/*<Search/>*/}
                    <Search/>
                </div>
            </div>
        </div>
    );

}

export default Home;
