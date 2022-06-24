import {Featured, Header, Hero} from "../../components";

const Home = () => {
	return (
		<>
			<Header />
			<Hero />
			<div style={{paddingBlock: "4rem"}} className='section__padding'>
				<Featured />
			</div>
		</>
	);
};

export default Home;
