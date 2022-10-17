import React from 'react';
import { NavLink } from 'react-router-dom';


const NavComponent = (
    {
        state,
        setUpdate,
        changeHandler,
        clickHandler
    }
) => {

    return (
        <div className='wp-container'>
            <h1 className='mt-5 my-4 text-center'>Wallpapers</h1>
            <div className='pb-4 d-flex justify-content-center align-items-center'>
                <input
                    type="text"
                    placeholder='Search . . .'
                    className='inp'
                    value={state}
                    onChange={e => changeHandler(e)}
                />
                <span className='d-flex text-white' onClick={clickHandler}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>
            <nav>
                <NavLink to='/' className='text-decoration-none text-white text-center' id='all'>All</NavLink>
                <NavLink to='/anime' className='text-decoration-none text-white text-center' id='anime' onClick={() => setUpdate('Anime')}>Anime</NavLink>
                <NavLink to='/city' className='text-decoration-none text-white text-center' id='city' onClick={() => setUpdate('City')}>City</NavLink>
                <NavLink to='/dark' className='text-decoration-none text-white text-center' id='dark' onClick={() => setUpdate('Dark')}>Dark</NavLink>
            </nav>
        </div>
    )
}

export default NavComponent