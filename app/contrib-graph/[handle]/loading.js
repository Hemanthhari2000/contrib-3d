'use client';
import TriangleLoader from '@/components/Animations/Loading/DnaLoading';
import PageTransition from '@/components/Animations/Transition/PageTransition';

export default function Loading() {
	return (
		<PageTransition>
			<TriangleLoader />
		</PageTransition>
	);
}
