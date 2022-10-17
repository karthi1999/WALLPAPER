import React from 'react'
import AnimeComponent from './AnimeComponent'
import CityComponent from './CityComponent'
import DarkComponent from './DarkComponent'

const AllComponent = () => {
	return (
		<div className='d-flex flex-column gap-2'>
			<AnimeComponent />
			<CityComponent />
			<DarkComponent />
		</div>
	)
}

export default AllComponent