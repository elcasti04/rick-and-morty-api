function Card({ location }) {
  return (
    <div
      id="card"
      className="flex flex-col items-center gap-4 p-6 px-4 w-full max-w-md mx-auto rounded-2xl border-4 border-white bg-green-600 text-white text-center overflow-hidden"
    >
      <div className="w-full">
        <h1 className="font-bold bg-green-700 py-2 px-4 rounded-t-md">Nombre de la ubicación</h1>
        <div className="bg-green-800 py-2 px-4 rounded-b-md">
          <p className="font-bold text-xl break-words">{location.name}</p>
        </div>
      </div>

      <div className="w-full">
        <h1 className="font-bold bg-green-700 py-2 px-4 rounded-t-md">Tipo de ubicación</h1>
        <div className="bg-green-800 py-2 px-4 rounded-b-md">
          <p className="font-bold text-lg break-words">{location.type}</p>
        </div>
      </div>

      <div className="w-full">
        <p className="font-bold bg-green-700 py-2 px-4 rounded-t-md">Dimensión</p>
        <div className="bg-green-800 py-2 px-4 rounded-b-md">
          <p className="font-bold text-lg break-words">{location.dimension}</p>
        </div>
      </div>

      <div className="w-full">
        <p className="font-bold bg-green-700 py-2 px-4 rounded-t-md">Residentes | Residente</p>
        <div className="bg-green-800 py-2 px-4 rounded-b-md">
          <p className="font-bold text-lg">
            {location.residents.length}{' '}
            {location.residents.length === 1 ? 'residente' : 'residentes'}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
