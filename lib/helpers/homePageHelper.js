export const dateRangeOptions = () => {
	const currentYear = new Date().getFullYear();
	let dateRange = [currentYear, currentYear - 1, currentYear - 2];
	let dateRangeOptionElements = [];
	for (let date of dateRange) {
		dateRangeOptionElements.push(
			<option key={date} value={date.toString()}>
				{date}
			</option>
		);
	}
	return dateRangeOptionElements;
};
