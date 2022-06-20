import React from "react";
// import { Link } from "react-router-dom";
import { withRouter } from "../directory/withRouter";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
// import Button from "../button/button.component";


const CollectionPreview = ({ title, items, navigate, linkUrl }) => (
    <div className="collection-preview">
        <div className="header">
        <h1 className="title">{title}</h1>
        <h2 className="view" onClick={() => {navigate(linkUrl)}}>View All</h2>
        </div>
        <div className="preview">
            {items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)


export default withRouter(CollectionPreview);