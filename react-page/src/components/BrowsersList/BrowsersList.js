import React from 'react'
import './BrowsersList.scss'
import Browser from "../Browser/Browser";
import {browsers} from "../../content/browsersListContent";

export default function BrowsersList() {
    const browsersToRender = [];

    if (typeof browsers === 'object') {
        for (const key in browsers) {
            browsersToRender.push(
                {
                    name: browsers[key].name,
                    img: browsers[key].img,
                    description: browsers[key].description
                }
            )
        }
    }

    console.log(browsersToRender)

    return (
        <section className="browsers">
            <h1>Popular web browsers</h1>
            <main className="browsers-list">
                {browsersToRender.map(browser => (
                    <Browser
                        browserName={browser.name}
                        imgUrl={browser.img}
                        imgDescription={browser.description}
                    />
                ))}
            </main>
        </section>
    );
}
