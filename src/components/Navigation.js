import React, { useState } from 'react'
import Button from './Button'
import NavItem from './NavItem'
import { titles, items } from '../data'
import Slider from './Slider'

function Navigation() {
    const [order, setOrder] = useState(0)
    const titlesLength = titles.length - 1

    function handleClick(e) {
        const type = e.target.dataset.pos
        if (type === "left") {
            if (order === 0) {
                setOrder(4)
            } else {
                setOrder((prev) => prev - 1)
            }
        } else {
            if (order === titlesLength) {
                setOrder(0)
            } else {
                setOrder((prev) => prev + 1)
            }
        }
    }

    return (
        <div className="full-container">
            <Slider order={order}></Slider>
            <div className="navigation-container">
                <div className="nav-buttons-container">
                    <Button position="left" action={handleClick}></Button>
                    <Button position="right" action={handleClick}></Button>
                </div>
                <div className="nav">
                    {items.map((item, index) => {
                        return <NavItem content={item} key={index}></NavItem>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Navigation
