import React from "react"
import LangCircle from "./LangCircle"
import languageList from "../languageList"

// var scrollTiltFunc = function() {
//     var x = window.scrollY;
//     x = (x / 300) * 100; // Scroll value in percentage
//     document.getElementById("test").style.transform = "translate(0px, 50px)";
//     var y = document.getElementById("test");
//     console.log(y);
// }
// window.addEventListener("scroll", scrollTiltFunc);

export default function Landing() {
    const langs = languageList.map(x => {
        return (
            <LangCircle
                key={x.id}
                x={x}
            />
        )
    })

    return (
        <section className="landing">
            <div className="landing-text_box">
                <h1 className="inlineDisplay fadeIn-animation_08">H</h1>
                <h1 className="inlineDisplay fadeIn-animation_08">i</h1>
                <h1 className="inlineDisplay fadeIn-animation_08">.</h1>
                <h1 className="inlineDisplay fadeIn-animation_08"> </h1>
                <h1 className="inlineDisplay fadeIn-animation_08">I</h1>
                <h1 className="inlineDisplay fadeIn-animation_08">'</h1>
                <h1 className="inlineDisplay fadeIn-animation_08">m</h1>
                <h1 className="inlineDisplay fadeIn-animation_08"> </h1>
                <h1 className="inlineDisplay fadeIn-animation_08">R</h1>
                <h1 className="inlineDisplay fadeIn-animation_08">y</h1>
                <h1 className="inlineDisplay fadeIn-animation_08">a</h1>
                <h1 className="inlineDisplay fadeIn-animation_08">n</h1>
                <h1 className="inlineDisplay fadeIn-animation_08">.</h1>
                <h2 className="fadeIn-animation_10">A <s>Professional</s> <b className="landing-uiux">UI/UX</b> Designer & Web Developer</h2>
                <div className="landing-button_holder">
                    <button className="landing-button fadeIn-animation_12">
                        <i className="fa-solid fa-code landing-button_icon fa-xl"></i>
                    </button>
                </div>

            </div>
            {/* <div className="landing-langlist">
                <div id="langHolder_1" className="landing-langlist_holder landing-langlist_holder_hori fadeIn-animation_12">
                    {langs}
                </div>
                <div id="langHolder_2" className="landing-langlist_holder landing-langlist_holder_hori fadeIn-animation_12">
                    {langs2}
                </div>
            </div> */}

            
        </section>
    )
}