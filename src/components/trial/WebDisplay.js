import React from "react"

export default function WebDisplay() {
    return (
        <section className="webDisplay">
            <div className="webDisplay-site_holder">
                <div className="webDisplay-site">
                    <img src={require("../../images/GoogleImg.png")}></img>
                </div>
            </div>
            <div className="webDisplay-overlay">

            </div>
        </section>
    )
}