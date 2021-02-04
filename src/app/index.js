import './index.css';
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
        } else if (gifsCount > 0 && !keyword.match(/^[0-9a-zA-Z]+$/)) {
            setError('Only letters and numbers allowed, sir.')
        }

    }, [toggle, gifsCount])

    const submit = e => {
        e.preventDefault()
        setMoreGifs(true);
        setGifsCount(12);
        setError('')
        setToggle(!toggle)
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
                <form onSubmit={(e) => submit(e)}>
                    <label>
                        <input name="keyword" type="text" placeholder="Enter word"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)} />
                    </label>
                    <button>Search</button>
                </form>
                {error === '' ? '' : <p>{error}</p>}
                <InfiniteScroll
                    dataLength={gifsCount}
                    next={fetchMoreData}
                    hasMore={moreGifs}
                    endMessage={
                        <p className='end-text'>Thats it, folks!</p>
                    }
                >
                    <section className='gifs-section'>
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
