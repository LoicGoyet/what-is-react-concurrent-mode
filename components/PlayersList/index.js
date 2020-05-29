import React, { Suspense } from "react";

import PlayerStats from "../PlayerStats";
import Loading from "../Loading";
import { fetchPlayersList, fetchPlayerStats } from "../../utils/data";
import "./style.scss";
import createResource from "../../utils/createResource";

const APIResource = createResource(() => fetchPlayersList());

const PlayersList = () => {
  const players = APIResource.read();
  const [selectedPlayer, setSelectedPlayer] = React.useState(null);
  const [startTransition] = React.unstable_useTransition({
    timeoutMs: 500,
  });

  const handlePlayerClick = (player) => (e) => {
    e.preventDefault();

    startTransition(() => {
      setSelectedPlayer({
        id: player.id,
        fullName: `${player.first_name} ${player.last_name}`,
        resource: createResource(() => fetchPlayerStats(player.id)),
      });
    });
  };

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
          <Suspense fallback={<Loading />}>
            <h2 className="players-list__stat-heading">
              {selectedPlayer.fullName}
            </h2>
            <PlayerStats resource={selectedPlayer.resource} />
          </Suspense>
        )}
      </section>
    </div>
  );
};

export default PlayersList;
