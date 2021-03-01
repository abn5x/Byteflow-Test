import React from 'react'
import { titles } from '../data'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

function Slider({ order }) {
    const style = {
        "backgroundImage": `url(${titles[order].img})`
    }
    return (
        <div className="slider-container">

            <div className="slider-fade"></div>
            <SwitchTransition mode="out-in">
                <CSSTransition in={true} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)} timeout={500} classNames="slide-text" key={titles[order].text}>
                    <div className="slider-text-container" key={titles[order].text}>
                        <h2>{titles[order].text}</h2>
                    </div>
                </CSSTransition>
            </SwitchTransition>
            <SwitchTransition mode="in-out">
                <CSSTransition in={true} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)} timeout={1000} classNames="slide" key={order}>
                    <div className="slider" style={style} key={order}>
                    </div>
                </CSSTransition>
            </SwitchTransition>

        </div>

    )
}

export default Slider
