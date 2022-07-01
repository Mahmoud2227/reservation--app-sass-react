import React from "react";
import {Footer, Header, SearchItem, SearchSideBar} from "../../components";

import "./List.scss";

const List = () => {
	return (
		<>
			<Header />
			<div className='list__container section__padding'>
				<div className='list__container-search-wrapper'>
					<SearchSideBar />
				</div>
				<div className='list__container-search-result'>
					<SearchItem />
					<SearchItem />
					<SearchItem />
					<SearchItem />
					<SearchItem />
					<SearchItem />
					<SearchItem />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default List;
