
import React from 'react';
import Player from './Player';
import players from './players';

const PlayersList = () => {
    return (
        <div>
            {players.map((player) => (
                <Player
                    key={player.id}
                    name={player.name}
                    team={player.team}
                    nationality={player.nationality}
                    number={player.number}
                    age={player.age}
                    imageUrl={player.imageUrl}
                />
            ))}
        </div>
    );
};

export default PlayersList;
