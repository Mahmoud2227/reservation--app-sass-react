import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBed, faPerson} from "@fortawesome/free-solid-svg-icons";

import "./SearchBar.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import {faCalendarDays} from "@fortawesome/free-regular-svg-icons";
import {DateRange} from "react-date-range";
import {format} from "date-fns";
import OptionsCard from "../OptionsCard/OptionsCard";

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
		children: 0,
		rooms: 1,
	});

	const [destination, setDestination] = useState("");

	const navigate = useNavigate();

	const handleSearch = () => {
		navigate("/hotels", {state: {destination, date, options}});
	};

	return (
		<div className='searchBar'>
			<div className='searchBar__container'>
				<div className='searchBar__item'>
					<FontAwesomeIcon icon={faBed} />
					<input
						type='text'
						placeholder='Where are you going?'
						className='searchBar__item-input'
						onChange={(e) => setDestination(e.target.value)}
					/>
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
							minDate={new Date()}
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
					{openOptions && <OptionsCard options={options} setOptions={setOptions} />}
				</div>
				<div className='searchBar__item'>
					<button className='searchBar__item-button' onClick={handleSearch}>
						Search
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchBar;
