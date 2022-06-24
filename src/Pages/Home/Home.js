import {Featured, Header, Hero} from "../../components";
import PopularCities from "../../components/PopularCities/PopularCities";

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<div style={{paddingBlock: "4rem"}} className='section__padding'>
				<Featured />
				<PopularCities />
			</div>
		</>
	);
};

export default Home;
