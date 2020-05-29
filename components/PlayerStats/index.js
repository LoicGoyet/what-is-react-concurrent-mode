import React from "react";
import PropTypes from "prop-types";

import Loading from "../Loading";
import { fetchPlayerStats } from "../../utils/data";
import { getFormatedDate } from "../../utils/date";
import "./style.scss";

const PlayerStats = ({ id }) => {
  const [games, setGames] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const games = await fetchPlayerStats(id);
      setGames(games);
      setIsLoading(false);
    };

    fetchData();
  }, [id, setIsLoading, setGames, setIsLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="player-stats">
      {!games.length && (
        <p className="player-stats__no-games">has not played yet</p>
      )}
      {games.map((game) => {
        return (
          <div className="player-stats__game" key={game.id}>
            <div className="player-stats__game-header" key={game.id}>
              <div className="player-stats__stat-var">
                {getFormatedDate(game.date)}
              </div>

              <div className="player-stats__stat-var">
                {game.min}
                <span className="player-stats__stat-label">min</span>
              </div>
            </div>

            <div className="player-stats__game-body">
              <React.Fragment>
                <div className="player-stats__stat-var">
                  {game.pts}
                  <span className="player-stats__stat-label">points</span>
                </div>

                <div className="player-stats__stat-var">
                  {game.reb}
                  <span className="player-stats__stat-label">rebounds</span>
                </div>

                <div className="player-stats__stat-var">
                  {game.ast}
                  <span className="player-stats__stat-label">assists</span>
                </div>

                <div className="player-stats__stat-var">
                  {game.blk}
                  <span className="player-stats__stat-label">blocks</span>
                </div>
              </React.Fragment>
            </div>
          </div>
        );
      })}
    </div>
  );
};

PlayerStats.propTypes = {
  id: PropTypes.number.isRequired,
};

export default PlayerStats;
