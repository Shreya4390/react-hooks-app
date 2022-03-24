import React from 'react';
import "../../App.css";
import Random from './Random_V1';
import Tag from './Tag_V1';

const CustomHook = () => {
    return (
        <div>
            <h2>Random GIF Application</h2>
            <div className='main-container'>
                <Random />
                <Tag />
            </div>
        </div>
    )
}
export default CustomHook;