import './index.css';
import { useState } from 'react';

function GifBox({ title, url, setSelectedGif, setSelectedGifBoxVisibility }) {

    return (
       
            <div className='img-box' >
                <div className='event-box'
                    onClick={() => {
                        setSelectedGifBoxVisibility(true);
                        setSelectedGif({ url, title });
                    }}
                >
                </div>
                <iframe className='small-gif' src={url} alt={title} />
            </div>
        
    );
}

export default GifBox;