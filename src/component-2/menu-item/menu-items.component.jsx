import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "../directory/withRouter";



const MenuItem = ({ title, imageUrl, size, navigate, linkUrl }) => (
    <div className={`${size} menu-item`} >

        <div className="background-image" 
            style={{
            backgroundImage: `url(${imageUrl})`
            }} 
        />
        <div className="content">
            <h1 className="title">{ title }</h1>
            <span className="subtitle" onClick={() => {navigate(linkUrl)}} >shop now</span>
        </div>
    </div>
)

export default withRouter(MenuItem);