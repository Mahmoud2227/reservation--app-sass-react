import "./OptionItem.scss";

const OptionItem = ({optionName, setFunction, optionValue}) => {
	const handleOptions = (name, operation) => {
		setFunction((prevState) => ({
			...prevState,
			[name]: operation === "inc" ? prevState[name]++ : prevState[name]--,
		}));
	};
	return (
		<div className='option'>
			<span className='option__text'>{optionName[0].toUpperCase() + optionName.slice(1)}</span>
			<div className='option__counter'>
				<button
					disabled={optionValue <= (optionName === "children" ? 0 : 1)}
					onClick={() => handleOptions(optionName, "dec")}>
					-
				</button>
				<span>{optionValue}</span>
				<button onClick={() => handleOptions(optionName, "inc")}>+</button>
			</div>
		</div>
	);
};

export default OptionItem;
