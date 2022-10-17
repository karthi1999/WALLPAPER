import React from 'react'
import { cityItems } from '../utilities/ImageItems'

const CityComponent = (
	{
		update
	}
) => {
	return (
		<>
			{
				update && <h1 className='text-center'>{update}</h1>
			}
			<div className='img-container city-add'>
				{
					cityItems.map((item, index) => {
						const {
							pic,
							alt
						} = item;
						return (
							<div key={index} className='img'>
								<img src={pic} alt={alt} />
							</div>
						)
					})
				}
			</div>
		</>
	)
}

export default CityComponent