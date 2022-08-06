import React from "react";

const card = props => {
    return (
        <div className="card card-personal mx-4">
            <div className="view">
                <img className="card-img-top" src={props.url} alt=""/>
                <a href="/#">
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>
            <div className="card-body">
                <a href="/#">
                    <h4 className="card-title">{props.name}</h4>
                </a>
                <div className="d-flex justify-content-between">
                    <span className="card-meta">{props.year}г</span>
                    <span className="card-meta">{props.country}</span>
                </div>
                <hr/>
                <p className="card-text">{props.description}</p>
            </div>
        </div>
    );
};

export default card;
