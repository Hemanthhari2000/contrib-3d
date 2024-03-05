import ImmersiveView from "@/components/ImmersiveView";
import fetchGithubContributionDataGraphql from "@/lib/fetchGithubContributionDataGraphql";

export default async function ImmersiveViewPage({ params, searchParams }) {
  let handle = params.handle;
  let year = searchParams.year;
  let data = await fetchGithubContributionDataGraphql(handle, year);
  return <ImmersiveView data={data} />;
}
