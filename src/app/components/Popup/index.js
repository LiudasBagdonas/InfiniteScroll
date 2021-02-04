import './index.css';

function Popup({ setSelectedGif, selectedGif, setSelectedGifBoxVisibility, selectedGifBoxVisibility }) {


    return (
        selectedGifBoxVisibility ?
            <div className='popup'>
                <div className='close-btn' onClick={() => { setSelectedGifBoxVisibility(false) }}>Close</div>
                <div className='popup-img-box'>
                    <iframe className='selected-gif' src={selectedGif.url} alt={selectedGif.title}></iframe>
                    <div className='invisible-layer'></div>
                </div>
            </div> :
            ''

    );
}

export default Popup;