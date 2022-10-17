import React from 'react'
import { darkItems } from '../utilities/ImageItems'

const DarkComponent = (
	{
		update
	}
) => {
	return (
		<>
			{
				update && <h1 className='text-center'>{update}</h1>
			}
			<div className='img-container dark-add'>
				{
					darkItems.map((item, index) => {
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

export default DarkComponent