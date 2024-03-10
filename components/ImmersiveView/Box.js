import { useBox } from '@react-three/cannon';

const BaseBox = ({ ...props }) => {
	const [ref] = useBox(() => ({
		type: 'Static',
		mass: 1,
		onCollide: e => {
			console.log(e);
		},
		...props
	}));

	return (
		<mesh castShadow position={props.position} ref={ref}>
			<boxGeometry args={props.args} />
			<meshStandardMaterial color={props.color} roughness={props.roughness} />
		</mesh>
	);
};

export default BaseBox;
