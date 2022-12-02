const getContributionsData = async (username) => {
  const headers = {
    Authorization: `bearer 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`,
  };
  const body = {
    query: `query {
                user(login: "${username}") {
                  name
                  contributionsCollection {
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
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });
  let data = await response.json();
  console.log(data);
  data = data.data.user.contributionsCollection.contributionCalendar.weeks;
  let weekData = [];
  data.forEach((weekWiseData) => {
    weekData.push(weekWiseData.contributionDays);
  });
  return weekData;
};

export default getContributionsData;
