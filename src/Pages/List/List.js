import React from "react";
import {Footer, Header, SearchSideBar} from "../../components";

const List = () => {
	return (
		<>
			<Header />
			<div className='list__container section__padding'>
				<div className='list__container-search-wrapper'>
					<SearchSideBar />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default List;
