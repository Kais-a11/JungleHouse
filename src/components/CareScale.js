import React from 'react';
import Sun from '../assets/sun.svg';
import Water from '../assets/water.svg';

function CareScale({ scaleValue, careType }) {
    const quantityLabel = {
        1: 'little',
        2: 'moderate',
        3: 'much',
    };
    const range = [1, 2, 3];
    const scaleType = careType === "Light" ?
        (<img src={Sun} alt='sum_icon' />) :
        (<img src={Water} alt='water_icon' />);

    return (
        <div onClick={() => alert(`this plant requires ${quantityLabel[scaleValue]} ${careType === "Light" ? "Light" : "watering"}`)}>
            {
                range.map((rangelem) =>
                    scaleValue >= rangelem ?
                        (<span key={rangelem.toString()}>{scaleType}</span>) : null
                )
            }
        </div>
    );
}

export default CareScale;
