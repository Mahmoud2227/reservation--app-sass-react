import {Featured, Footer, Header, Hero} from "../../components";
import BecomeHost from "../../components/BecomeHost/BecomeHost";
import PopularCities from "../../components/PopularCities/PopularCities";

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<div style={{paddingBlock: "4rem"}} className='section__padding'>
				<Featured />
				<PopularCities />
				<BecomeHost />
			</div>
			<Footer />
		</>
	);
};

export default Home;
