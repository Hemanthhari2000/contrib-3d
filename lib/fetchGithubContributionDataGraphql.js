const fetchGithubContributionDataGraphql = async (username, year) => {
  const headers = {
    Authorization: `bearer ${process.env.GITHUB_GRAPHQL_TOKEN}`,
  };
  const from = `${year}-01-01T00:00:00.000+0000`;
  const to = `${year}-12-31T00:00:00.000+0000`;
  const body = {
    query: `query {
              user(login: "${username}") {
                name
                contributionsCollection (from: "${from}", to: "${to}") {
                  contributionCalendar {
                    colors
                    totalContributions
                    weeks {
                      contributionDays {
                        color
                        contributionCount
                        date
                        weekday
                      }
                      firstDay
                    }
                  }
                }
              }
            }`,
  };
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify(body),
      headers: headers,
    });
    let data = await response.json();
    data = data.data.user.contributionsCollection.contributionCalendar.weeks;
    
    let weekData = [];
    data.forEach((weekWiseData) => {
      weekData.push(weekWiseData.contributionDays);
    });
    return {
      username: username,
      year: year,
      minCount: 0,
      maxCount: 8,
      contributions: weekData,
    };
  } catch (error) {
    return null;
  }
};

export default fetchGithubContributionDataGraphql;
