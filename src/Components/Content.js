import React from "react";

import Articles from "./Articles";

const Content = () => {
    return (
        <main>
            <section className="posts">
                <div className="container">
                    <h1>Posts</h1>
                    <Articles />
                </div>
            </section>
        </main>
    )
}

export default Content;