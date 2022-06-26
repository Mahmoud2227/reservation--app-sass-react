import {Featured, Footer, Header, Hero, PopularCities, BecomeHost} from "../../components";

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
