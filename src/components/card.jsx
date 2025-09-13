
function Card({ location }) {
	return (
<div id="card" className="flex flex-col items-center gap-4 p-6 max-w-md mx-auto rounded-2xl border-4 border-white bg-green-600 text-white text-center">
  <div className="w-full">
    <h1 className="font-bold bg-green-700 py-2 px-4 rounded-t-md">Name of location</h1>
    <div className="bg-green-800 py-2 px-4 rounded-b-md">
      <p className="font-bold text-xl">{location.name}</p>
    </div>
  </div>

  <div className="w-full">
    <h1 className="font-bold bg-green-700 py-2 px-4 rounded-t-md">Type of locacion</h1>
    <div className="bg-green-800 py-2 px-4 rounded-b-md">
      <p className="font-bold text-lg">{location.type}</p>
    </div>
  </div>

  <div className="w-full">
    <p className="font-bold bg-green-700 py-2 px-4 rounded-t-md">Dimention</p>
    <div className="bg-green-800 py-2 px-4 rounded-b-md">
      <p className="font-bold text-lg">{location.dimension}</p>
    </div>
  </div>

  <div className="w-full">
    <p className="font-bold bg-green-700 py-2 px-4 rounded-t-md">Residents | Resident</p>
    <div className="bg-green-800 py-2 px-4 rounded-b-md">
      <p className="font-bold text-lg">
        {location.residents.length} {location.residents.length === 1 ? 'resident' : 'residents'}
      </p>
    </div>
  </div>        
</div>


	);
}

export default Card;
