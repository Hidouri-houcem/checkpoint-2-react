
import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, number, age, imageUrl }) => {
    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Équipe:</strong> {team}
                </Card.Text>
                <Card.Text>
                    <strong>Nationalité:</strong> {nationality}
                </Card.Text>
                <Card.Text>
                    <strong>Numéro de maillot:</strong> {number}
                </Card.Text>
                <Card.Text>
                    <strong>Âge:</strong> {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

Player.defaultProps = {
    name: 'Inconnu',
    team: 'Non spécifié',
    nationality: 'Inconnue',
    number: '0',
    age: 'Non spécifié',
    imageUrl: 'https://via.placeholder.com/150',
};

export default Player;
