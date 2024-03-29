import { Triangle } from 'react-loader-spinner';

const TriangleLoader = () => {
	return (
		<>
			<Triangle
				height="80"
				width="80"
				color="#4fa94d"
				ariaLabel="triangle-loading"
				wrapperStyle={{}}
				wrapperClassName=""
				visible={true}
			/>
		</>
	);
};

export default TriangleLoader;
