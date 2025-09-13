import { useEffect } from 'react';
import { useApi } from '../hooks/useApi';

function Item({ url }) {
	const [resident, getResident] = useApi();

	useEffect(() => {
		getResident(url);
	}, [url]);

    console.log(resident)
	if (!resident) return null;
    

	return (
		<div id="item">
			<img id="item-img" src={resident.image} alt={resident.name} />
			<br />
			<h2 className='font-bold text-xl'>{resident.name}</h2>
            <p className={`font-bold bg-green-400 ${resident.status === 'Dead' ? 'bg-red-500 text-white px-2 rounded' : ''}${resident.status === 'unknown' ? 'bg-orange-500' : ''}`}><span id='status' className='font-bold'>status: </span>{resident.status}</p>
            <p><span className='font-bold'>species: </span>{resident.species}</p>
            <p><span className='font-bold'>gender: </span>{resident.gender}</p>
            <p><span className='font-bold'>episodes where appear:</span>{' '}{resident.episode.length}</p>
		</div>
	);
}

export default Item;
