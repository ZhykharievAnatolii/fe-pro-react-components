import React from "react";

import { postsData } from "./Data";

const Articles = () => {
    return (
        <ul className="list">
            {postsData.map(({id, title, text}) => {
                return (
                    <li className="list__item" key={id}>
                        <h2>{title}</h2>
                        <p>{text}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default Articles;