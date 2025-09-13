import { useApi } from './hooks/useApi';
import { useEffect } from 'react';
import { baseUrl, randomId } from './lib/utils';
import Card from './components/card';
import List from './components/list';
import Search from './components/Search';

{
	/*-----------------------------------------------------------------------------------------------------------------------------*/
}

function Header({ title }) {
	const styles = {
		fontSize: '40px',
		fontWeight: 'bold',
		color: '#00ffcc', // color verde-azulado interno
		textShadow: `
      -2px -2px 0 #003300,  
       2px -2px 0 #003300,
      -2px  2px 0 #003300,
       2px  2px 0 #003300,
       0px  0px 10px #00ff00
    `,
		fontFamily: "'Comic Sans MS', cursive, sans-serif",
		backgroundColor: '#00ff2aff',
		padding: '20px',
		textAlign: 'center',
	};
	return (
		<header style={styles}>
			<h1>{title}</h1>
		</header>
	);
}

{
	/*-----------------------------------------------------------------------------------------------------------------------------*/
}

function App() {
	const [location, getLocation] = useApi();

	useEffect(() => {
		getLocation(`${baseUrl}/${randomId}`);
	}, []);

	return (
		<div>
			<Header title="Rick and Morty" />
			<img src="Rick y morty.jpg" alt="" />
			<br />

			<Search onSearch={(locationId) => getLocation(`${baseUrl}/${locationId}`)}/>
			<br />

			{location && <Card location={location} />}

			{/* residents list */}
      <div id='item-box'>
			<List residents={location?.residents} />
      </div>

	  <footer id = 'footer'>©Derechos Reservados | Autor: Andres Castro </footer>
		</div>
	);
}

export default App;
