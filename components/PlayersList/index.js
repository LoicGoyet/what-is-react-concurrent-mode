import React from "react";

import Loading from "../Loading";
import PlayerStats from "../PlayerStats";
import { fetchPlayersList } from "../../utils/data";
import "./style.scss";

const PlayersList = () => {
  const [players, setPlayers] = React.useState([]);
  const [selectedPlayer, setSelectedPlayer] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const players = await fetchPlayersList();
      setPlayers(players);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handlePlayerClick = (player) => (e) => {
    e.preventDefault();
    setSelectedPlayer(player);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="players-list">
      <ul className="players-list__menu">
        {players.map((player) => {
          const isSelected = selectedPlayer && selectedPlayer.id === player.id;
          return (
            <li key={player.id}>
              <button
                onClick={handlePlayerClick(player)}
                className={`player-list__player-btn ${
                  isSelected ? "player-list__player-btn--selected" : ""
                }`}
              >
                {player.first_name} {player.last_name}
              </button>
            </li>
          );
        })}
      </ul>

      <section className="players-list__body">
        {!selectedPlayer && (
          <div className="player-list__stat-placeholder">pick a player</div>
        )}

        {!!selectedPlayer && (
          <React.Fragment>
            <h2 className="players-list__stat-heading">
              {selectedPlayer.first_name} {selectedPlayer.last_name}
            </h2>
            <PlayerStats id={selectedPlayer.id} />
          </React.Fragment>
        )}
      </section>
    </div>
  );
};

export default PlayersList;
