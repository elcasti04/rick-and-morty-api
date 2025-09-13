import Item from './item';
function list({ residents }) {
	return (
		<>
			{residents?.map((resident) => (
				<Item key={resident} url={resident} />
			))}

			{residents?.length === 0 && <p>No residents found</p>}
		</>
	);
}

export default list;
