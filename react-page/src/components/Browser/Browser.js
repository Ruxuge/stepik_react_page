import React from 'react'
import './Browser.scss'

export default function Browser({ browserName, imgUrl, imgDescription }) {
    return (
        <article className="browser">
            <h3>{browserName}</h3>
            <figure>
                <img
                    src={imgUrl}
                    className='page-logo'
                    alt={browserName} />
            </figure>
            <p>{imgDescription}</p>
        </article>
    );
}
