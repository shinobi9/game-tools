import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const village = [
    {
        url: "https://cdn.jsdelivr.net/gh/shinobi9/cdn/gametools/minecraft/village.webp",
        title: "1.14+村民交易"
    }
]

const actuallyAddons = [
    {
        url: "https://cdn.jsdelivr.net/gh/shinobi9/cdn/gametools/minecraft/actuallyaddons.png",
        title: "实用拓展 充能"
    }
]

class Viewer extends React.Component {
    // openUrl(url) {
    //     if (url) {
    //         window.open(url, '_blank')
    //     }
    // }

    render() {
        const {images} = this.props
        return (
            <div>
                <Carousel showArrows={true} showStatus={false} showIndicators={true} dynamicHeight={true}
                          emulateTouch={true}>
                    {
                        images.map(image => (
                            <div /*onClick={() => this.openUrl(image.url)}*/>
                                <img src={image.url} alt={""}/>
                                <p className="legend">{image.title}</p>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        )
    }
}


export {Viewer, village, actuallyAddons}