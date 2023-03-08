import React from "react"

var track;

document.onmousemove = function() {
    track = document.getElementById("image-track");
}

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;
const handleOnUp = () => {
track.dataset.mouseDownAt = "0";  
track.dataset.prevPercentage = track.dataset.percentage;
}
const handleOnMove = e => {
if(track.dataset.mouseDownAt === "0") {
    return;
}

const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

track.dataset.percentage = nextPercentage;
track.animate({
    transform: `translate(${nextPercentage}%, 0)`
}, { duration: 1200, fill: "forwards" });

for(const image of track.getElementsByClassName("image")) {
    image.animate({
    objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
}
}

/* -- Had to add extra lines for touch events -- */
window.onmousedown = e => handleOnDown(e);
// window.ontouchstart = e => handleOnDown(e.touches[0]);
window.onmouseup = e => handleOnUp(e);
// window.ontouchend = e => handleOnUp(e.touches[0]);
window.onmousemove = e => handleOnMove(e);
// window.ontouchmove = e => handleOnMove(e.touches[0]);

export default function Banner() {

    return (
        <section className="banner fadeIn-animation_12">
            <hr></hr>
            <div className="banner-track">
                <div className="banner-item">
                    <h1>Dedication</h1>
                    <p>a strong will</p>
                </div>
                <div className="banner-item">
                    <h1>Perseverance</h1>
                    <p>garen's passive</p>
                </div>
                <div className="banner-item">
                    <h1>Commitment</h1>
                    <p>delivering only the best</p>
                </div>
                <div className="banner-item">
                    <h1>Fidelity</h1>
                    <p>fine tuning for the greatest</p>
                </div>
            </div>
            <hr></hr>









            {/* <h1 className="banner-text">lorem ipsum dolor</h1>
            <hr></hr>
                <div className="image-track_holder">
                    <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
                        <img className="image" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                        <img className="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
                        <img className="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                        <img className="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                        <img className="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                        <img className="image" src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
                        <img className="image" src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
                        <img className="image" src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
                    </div>
                </div> */}
        </section>
    )
}