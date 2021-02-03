import './index.css';
import { useState } from 'react';

function GifBox({ title, url, setSelectedGif, setSelectedGifBoxVisibility }) {

    return (
       
            <div className='imgBox' >
                <div className='eventBox'
                    onClick={() => {
                        setSelectedGifBoxVisibility(true);
                        setSelectedGif({ url, title });
                    }}
                >
                </div>
                <iframe className='smallGif' src={url} alt={title} />
            </div>
        
    );
}

export default GifBox;