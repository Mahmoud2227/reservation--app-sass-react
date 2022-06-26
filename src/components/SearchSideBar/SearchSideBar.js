import {format} from "date-fns";
import {useState} from "react";
import {DateRange} from "react-date-range";
import {useLocation} from "react-router-dom";
import OptionsCard from "../OptionsCard/OptionsCard";

import "./SearchSideBar.scss";

const SearchSideBar = () => {
	const {state} = useLocation();

	const [destination, setDestination] = useState(state ? state.destination : "");

	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState(
		state
			? {...state.options}
			: {
					adult: 1,
					children: 0,
					rooms: 1,
			  }
	);

	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState(
		state
			? [...state.date]
			: [
					{
						startDate: new Date(),
						endDate: new Date(),
						key: "selection",
					},
			  ]
	);

	const dateClickHandler = () => {
		setOpenDate((prevState) => !prevState);
		setOpenOptions(false);
	};

	const optionsClickHandler = () => {
		setOpenOptions((prevState) => !prevState);
		setOpenDate(false);
	};

	return (
		<div className='search-sidebar'>
			<h3>Search</h3>
			<div className='search-sidebar-input'>
				<h5>Destination</h5>
				<input
					type='text'
					placeholder='Enter destination'
					value={destination}
					onChange={(e) => setDestination(e.target.value)}
				/>
			</div>
			<div className='search-sidebar-input'>
				<h5>Check-in date</h5>
				<input
					type='button'
					onClick={dateClickHandler}
					value={`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
						date[0].endDate,
						"MM/dd/yyyy"
					)}`}
				/>
				{openDate && (
					<DateRange
						editableDateInputs={true}
						onChange={(item) => setDate([item.selection])}
						moveRangeOnFirstSelection={false}
						ranges={date}
						minDate={new Date()}
						className='searchBar__item-data-range'
					/>
				)}
			</div>
			<div className='search-sidebar-options'>
				<h5>Options</h5>
				<div className='search-sidebar-options-input'>
					<button
						onClick={
							optionsClickHandler
						}>{`${options.adult} Adult . ${options.children} Children . ${options.rooms} Rooms`}</button>
					{openOptions && (
						<OptionsCard options={options} setOptions={setOptions} topPosition='50px' />
					)}
				</div>
				<div className='search-sidebar-options-input'>
					<label>Min price (per night)</label>
					<input type='number' min={0} />
				</div>
				<div className='search-sidebar-options-input'>
					<label>Max price (per night)</label>
					<input type='number' min={0} />
				</div>
			</div>
			<button className='search-sidebar-button'>Search</button>
		</div>
	);
};

export default SearchSideBar;
