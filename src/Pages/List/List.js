import React from "react";
import {Footer, Header} from "../../components";
import SearchSideBar from "../../components/SearchSideBar/SearchSideBar";

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
