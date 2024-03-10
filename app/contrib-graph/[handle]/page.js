import GraphView from '@/components/Graph/GraphView';
import fetchGithubContributionDataGraphql from '@/lib/fetchGithubContributionDataGraphql';

export default async function ContribGraph({ params, searchParams }) {
	let handle = params.handle;
	let year = searchParams.year;
	let data = await fetchGithubContributionDataGraphql(handle, year);

	return <GraphView data={data} />;
}
