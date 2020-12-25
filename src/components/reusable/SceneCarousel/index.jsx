import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import SceneDetails from '../../../Pages/Scene/Components/SceneDetails';
import { SceneCarouselWrapper, SingleScene } from './styles';

import "react-responsive-carousel/lib/styles/carousel.min.css";

const SceneCarousel = ({ scenes }) => {
    return (
        <Carousel styles={{ backgroundColor: 'white' }}>
            {scenes.map(scene => (
                <SceneDetails scene={scene} />
            ))}
        </Carousel>
    )
};

export default SceneCarousel