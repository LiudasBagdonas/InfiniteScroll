import './index.css';
import { useState, useEffect } from 'react';
import GifBox from './components/GifBox';
import InfiniteScroll from 'react-infinite-scroll-component';
import Popup from './components/Popup';

function App() {

    const [gifs, setGifs] = useState([])
    const [keyword, setKeyword] = useState('')
    const [error, setError] = useState('')
    const [gifsCount, setGifsCount] = useState(12)
    const [moreGifs, setMoreGifs] = useState(true)
    const [selectedGif, setSelectedGif] = useState({})
    const [selectedGifBoxVisibility, setSelectedGifBoxVisibility] = useState(false)

    const giphyQuery = "https://api.giphy.com/v1/gifs/search?q=" + keyword + "&limit=" + gifsCount + "&api_key=qcxxaTUykVLrYTfCEUFXcNVowsiVteTH"

    const submit = e => {
        e.preventDefault()
        if (keyword.match(/^[0-9a-zA-Z]+$/)) {
            fetch(giphyQuery,
                {
                    headers: {
                        'Content-Type': 'text/html'
                    }
                }
            )
                .then(res => res.json())
                .then(data => setGifs(data.data))
            setError('')
        } else {
            setError('Only letters and numbers allowed, sir.')
        }
    }

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    const fetchMoreData = () => {
        if (gifsCount > 48) {
            setMoreGifs(false);
            return;
        } else {
            setGifsCount(gifsCount + 12)
        }

        setTimeout(() => {
            fetch(giphyQuery)
                .then(res => res.json())
                .then(data => setGifs(data.data))
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
                <form onSubmit={submit}>
                    <label>Search
                        <input name="keyword" type="text" placeholder="Enter word"
                            value={keyword}
                            onChange={(e) => handleChange(e, "keyword")} />
                    </label>
                </form>
                {error === '' ? '' : <p>{error}</p>}
                <InfiniteScroll
                    dataLength={gifsCount}
                    next={fetchMoreData}
                    hasMore={moreGifs}
                    endMessage={
                        <p className='endText'>Thats it, folks!</p>
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
