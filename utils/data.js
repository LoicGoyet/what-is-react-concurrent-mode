export const fetchPlayersList = async () => {
  const response = await fetch(
    "https://free-nba.p.rapidapi.com/players?page=0&per_page=25",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
      },
    }
  );

  const jsonRes = await response.json();
  return jsonRes.data;
};

export const fetchPlayerStats = async (playerId) => {
  const response = await fetch(
    `https://free-nba.p.rapidapi.com/stats?page=0&per_page=5&player_ids[]=${playerId}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-nba.p.rapidapi.com",
        "x-rapidapi-key": process.env.X_RAPIDAPI_KEY,
      },
    }
  );

  const jsonRes = await response.json();
  const data = Object.keys(jsonRes.data).map((statsId) => {
    const stats = jsonRes.data[statsId];
    return {
      date: stats.game.date,
      id: stats.id,
      min: stats.min || 0,
      pts: stats.pts || 0,
      reb: stats.reb || 0,
      ast: stats.ast || 0,
      blk: stats.blk || 0,
    };
  });
  return data;
};
