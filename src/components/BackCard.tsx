import React from 'react'
import { SiGutenberg } from 'react-icons/si';

interface BackCardProps {
    height: number;
}
const BackCard: React.FC<BackCardProps> = ({ height = 192 }) => {
    const width = (height * 250) / 350;
    const _1 = height / 192; //1 px value at height 192
    return (
        <div style={{ height, width, border: `${_1*1.5}px solid #996515`, borderRadius: _1 * 6, padding: _1*.5, 
        color: '#996515', backgroundColor:'#F4DDBD'}}
            className='flex justify-center items-center'>
                <SiGutenberg
                 style={{
                    transform: 'scaleY(1.29)',// Stretches the icon verticall
                    fontSize: _1 * 138 ,
                    filter: `drop-shadow(${_1*2}px ${_1*2}px ${_1}px rgba(0, 0, 0, 0.5))`, // Apply drop shadow to icon
                }} />
        </div>
    )
}

export default BackCard;