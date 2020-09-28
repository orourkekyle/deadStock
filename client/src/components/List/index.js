import React from "react";

export function List({ children }) {
    return (
        <div className="list-overflow-container">
            <ul className="list img-list">
                {children}
            </ul>
        </div>
    );
}

export function ListItem({ children }) {
    return (
        <li>
            <div className="list-img">
                {children.image}
            </div>
            <div className="li-text">
                <div className="li-head">
                    {children.name}
                </div>
                <div className="li-sub">
                    {children.brand}
                </div>
                <div className="li-sub">
                    {children.releaseYear}
                </div>
            </div>
        </li>
    );
}