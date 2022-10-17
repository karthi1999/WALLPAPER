import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllComponent from "./components/pageComponents/AllComponent";
import AnimeComponent from "./components/pageComponents/AnimeComponent";
import CityComponent from "./components/pageComponents/CityComponent";
import DarkComponent from "./components/pageComponents/DarkComponent";
import NavComponent from "./components/pageComponents/NavComponent";
import NoMatch from "./components/pageComponents/NoMatch";

function App() {
    const [state, setState] = useState('');
    const [update, setUpdate] = useState('');

    const changeHandler = e => {
        setState(e.target.value.toLowerCase())

    }
    const clickHandler = () => {
        setState('')
        if (state === 'all') {
            document.getElementById('all').click()
        }
        else if (state === 'anime') {
            document.getElementById('anime').click()
        }
        else if (state === 'city') {
            document.getElementById('city').click()
        }
        else if (state === 'dark') {
            document.getElementById('dark').click()
        }
        else {
            alert('Kindly find the valid one')
        }
    }
    return (
        <div className="App">
            <NavComponent
                state={state}
                setUpdate={setUpdate}
                changeHandler={changeHandler}
                clickHandler={clickHandler}
            />
            <Routes>
                <Route exact path="/" element={<AllComponent />} />
                <Route path="anime" element={<AnimeComponent update={update} />} />
                <Route path="city" element={<CityComponent update={update} />} />
                <Route path="dark" element={<DarkComponent update={update} />} />
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </div>
    );
}

export default App;
