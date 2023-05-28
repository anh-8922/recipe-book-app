import HTMLFlipBook from 'react-pageflip';
import React from 'react';
import './component.css'
const Page = React.forwardRef((props, ref) => {
    return(
        <div id="flip" className="demoPage" ref={ref}>
        /* ref required */
            <h1>Page Header</h1>
            <p>{props.children}</p>
            <p>Page number: {props.number}</p>
        </div>
    )
}

)
export default function FlipCards(props) {
    return(
        <HTMLFlipBook  width={800} height={450}>
            <Page number="1">Page text</Page>
            <Page number="2">Page text</Page>
            <Page number="3">Page text</Page>
            <Page number="4">Page text</Page>
        </HTMLFlipBook>
    )
}