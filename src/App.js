import React from "react"
import Navbar from "./components/Navbar"
import Landing from "./components/Landing"
import Gallery from "./components/trial/Gallery"
import Banners from "./components/trial/Banners"
import WebDisplay from "./components/trial/WebDisplay"

// https://colorhunt.co/palette/ecf2ff3e54ac655dbbbface2

export default function App() {
    return (
        <div>
            <Navbar />
            <Landing />
            {/* <WebDisplay /> */}
            {/* <Gallery /> */}
            {/* <Banners /> */}
        </div>
    )
}