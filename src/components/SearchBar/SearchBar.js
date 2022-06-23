import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faPerson} from "@fortawesome/free-solid-svg-icons";

import "./SearchBar.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import {faCalendarDays} from "@fortawesome/free-regular-svg-icons";
import {DateRange} from "react-date-range";
import {format} from "date-fns";
import OptionItem from "./OptionItem/OptionItem";

const SearchBar = () => {
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);

	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 1,
		rooms: 1,
	});
	return (
		<div className='searchBar'>
			<div className='searchBar__container'>
				<div className='searchBar__item'>
					<FontAwesomeIcon icon={faBed} />
					<input type='text' placeholder='Where are you going?' className='searchBar__item-input' />
				</div>
				<div className='searchBar__item'>
					<FontAwesomeIcon icon={faCalendarDays} />
					<span onClick={() => setOpenDate((prevState) => !prevState)}>{`${format(
						date[0].startDate,
						"MM/dd/yyyy"
					)} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
					{openDate && (
						<DateRange
							editableDateInputs={true}
							onChange={(item) => setDate([item.selection])}
							moveRangeOnFirstSelection={false}
							ranges={date}
							className='searchBar__item-data-range'
						/>
					)}
				</div>
				<div className='searchBar__item'>
					<FontAwesomeIcon icon={faPerson} />
					<span
						onClick={() =>
							setOpenOptions((prevState) => !prevState)
						}>{`${options.adult} adult . ${options.children} children . ${options.rooms} rooms`}</span>
					{openOptions && (
						<div className='searchBar__item-options'>
							<OptionItem optionName='adult' setFunction={setOptions} optionValue={options.adult} />
							<OptionItem
								optionName='children'
								setFunction={setOptions}
								optionValue={options.children}
							/>
							<OptionItem optionName='rooms' setFunction={setOptions} optionValue={options.rooms} />
						</div>
					)}
				</div>
				<div className='searchBar__item'>
					<button className='searchBar__item-button'>Search</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
