import './index.scss';
import { useState, useEffect } from 'react';
import GifBox from './components/GifBox';
import InfiniteScroll from 'react-infinite-scroll-component';
import Popup from './components/Popup';

function App() {

    const [gifs, setGifs] = useState([])
    const [keyword, setKeyword] = useState('')
    const [error, setError] = useState('')
    const [gifsCount, setGifsCount] = useState(0)
    const [moreGifs, setMoreGifs] = useState(true)
    const [selectedGif, setSelectedGif] = useState({})
    const [selectedGifBoxVisibility, setSelectedGifBoxVisibility] = useState(false)
    const [toggle, setToggle] = useState(true)

    const giphyQuery = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&limit=" + gifsCount + "&api_key=qcxxaTUykVLrYTfCEUFXcNVowsiVteTH"

    useEffect(() => {
        if (keyword.match(/^[0-9a-zA-Z]+$/)) {
            fetch(giphyQuery)
                .then(res => res.json())
                .then(data => setGifs(data.data))
            setError('')
        } else if (gifsCount > 0 && !keyword.match(/^[0-9a-zA-Z]+$/) && keyword !== '') {
            setError('Only letters and numbers allowed, sir.')
        }

    }, [keyword, gifsCount])

    const submit = e => {
        e.preventDefault()
        let inputValue = document.getElementById('searchInput').value
        
        if (inputValue !== '') {
            setMoreGifs(true);
            setGifsCount(12);
            setError('')
            setToggle(!toggle)
            setKeyword(inputValue)
        } else {
            setError('Nothing entered.')
        }
    }

    const fetchMoreData = () => {
        setTimeout(() => {
            if (gifsCount >= 48) {
                setMoreGifs(false);
                return;
            } else {
                setGifsCount(gifsCount + 12)
                setMoreGifs(true);
            }
        }, 1000);

    };

    return (
        <div className="App">
            <Popup
                setSelectedGif={setSelectedGif}
                selectedGif={selectedGif}
                setSelectedGifBoxVisibility={setSelectedGifBoxVisibility}
                selectedGifBoxVisibility={selectedGifBoxVisibility}
            />
            <main className='main'>
                <h1>Find your gif</h1>
                <form onSubmit={(e) => submit(e)}>
                    <label>
                        <input id="searchInput" name="keyword" type="text" placeholder="Enter word"/>
                    </label>
                    <button>Search</button>
                </form>
                {error === '' ? '' : <p className='search-error'>{error}</p>}
                <InfiniteScroll
                    dataLength={gifsCount}
                    next={fetchMoreData}
                    hasMore={moreGifs}
                    endMessage={
                        <p className='end-text'>Thats it, folks!</p>
                    }
                >
                    <section className={`gifs-section error--${error !== '' ? 'true' : 'false'}`}>
                        {gifs.map((gif) => (
                            <GifBox
                                setSelectedGif={setSelectedGif}
                                setSelectedGifBoxVisibility={setSelectedGifBoxVisibility}
                                key={gif.id} title={gif.title} url={gif.embed_url}></GifBox>
                        ))}
                    </section>
                </InfiniteScroll>
            </main>
        </div>
    );
}

export default App;
