import OptionItem from "./OptionItem/OptionItem";

import "./OptionsCard.scss";

const OptionsCard = ({setOptions, options, topPosition, LeftPosition}) => {
	return (
		<div
			className='options-card'
			style={{top: topPosition ? topPosition : "40px", left: LeftPosition ? LeftPosition : "0px"}}>
			<OptionItem optionName='adult' setFunction={setOptions} optionValue={options.adult} />
			<OptionItem optionName='children' setFunction={setOptions} optionValue={options.children} />
			<OptionItem optionName='rooms' setFunction={setOptions} optionValue={options.rooms} />
		</div>
	);
};

export default OptionsCard;
