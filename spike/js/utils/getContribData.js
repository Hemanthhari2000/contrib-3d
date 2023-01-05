const getContributions = async (token, username) => {
	const headers = {
		Authorization: `bearer ${token}`,
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
	data = data.data.user.contributionsCollection.contributionCalendar.weeks;
	let weekData = [];
	data.forEach((weekWiseData) => {
		weekData.push(weekWiseData.contributionDays);
	});
	return weekData;
};

export default getContributions;
