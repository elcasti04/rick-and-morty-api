import { useEffect, useRef, useState } from 'react';
import { useApi } from '../hooks/useApi';
import { baseUrl } from '../lib/utils';

function Search({ onSearch }) {
  const [location, getLocation] = useApi();
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    getLocation(`${baseUrl}/${Array.from({ length: 126 }, (_, i) => i + 1)}`);
  }, []);

  const handleSearch = () => {
    const Value = inputRef.current.value.trim();
    if (!Value) {
      setError('Please enter a location name or ID.');
      return;
    }

    const numValue = Number(Value);

    // Buscar por ID si es número válido
    if (!Number.isNaN(numValue) && numValue >= 1 && numValue <= 126) {
      setError('');
      onSearch(numValue);
      return;
    }

    // Buscar por nombre exacto (case-insensitive)
    const match = location.find(
      (loc) => loc.name.toLowerCase() === Value.toLowerCase()
    );

    if (!match) {
      setError('Location not found by name.');
      return;
    }

    setError('');
    onSearch(match.id);
  };

  if (!location) return 'loading...';

  return (
    <div id="search" className="flex flex-col items-center">
      <div className="flex justify-center">
        <input
          ref={inputRef}
          id="input-search"
          type="text"
          list="locations"
          placeholder="Search a location"
        />
        <button
          onClick={handleSearch}
          id="btn-search"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
        <datalist id="locations">
          {location.map((location) => (
            <option key={location.id} value={location.name,location.id}>
              {location.name}
            </option>
          ))}
        </datalist>
      </div>

      {error && (
        <p className="text-red-600 font-bold mt-2 text-center">
          {error}
        </p>
      )}
    </div>
  );
}

export default Search;
