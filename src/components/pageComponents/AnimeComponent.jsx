import React from 'react'
import { animeItems } from '../utilities/ImageItems'

const AnimeComponent = (
	{
		update
	}
) => {
	return (
		<>
			{
				update && <h1 className='text-center'>{update}</h1>
			}
			<div className='img-container'>
				{
					animeItems.map((item, index) => {
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

export default AnimeComponent