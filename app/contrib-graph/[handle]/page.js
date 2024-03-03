import fetchGithubContributionDataGraphql from "@/lib/fetchGithubContributionDataGraphql";

export default async function ContribGraph({ params, searchParams }) {
  let handle = params.handle;
  let year = searchParams.year;
  let data = await fetchGithubContributionDataGraphql(handle, year);
  console.log(data);

  return data;
}
