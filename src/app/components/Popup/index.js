import './index.css';

function Popup({ setSelectedGif, selectedGif, setSelectedGifBoxVisibility, selectedGifBoxVisibility }) {


    return (
        selectedGifBoxVisibility ?
            <div className='popup'>
                <div className='closebtn' onClick={() => { setSelectedGifBoxVisibility(false) }}>Close</div>
                <div className='img-box'>
                    <iframe className='selectedGif' src={selectedGif.url} alt={selectedGif.title}></iframe>
                    <div className='invisibleLayer'></div>
                </div>
            </div> :
            ''

    );
}

export default Popup;