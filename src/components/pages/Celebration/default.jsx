import React from 'react';
import {inject, observer} from 'mobx-react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Table = styled.table`
    margin: auto;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 70%;
`;

const Th = styled.th`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;

const Td = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
`;

class Celebration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            scores: [],
        };
    }

    componentDidMount(){
        // fetch data
        axios.get('/scores')
            .then((response) => {
                console.log(response.data.data);
                this.setState({scores: response.data.data});
            })
            .catch((error) => {
                console.log('/scores api not available');
                console.log(error);
            });
    }


    render(){
        const {store: {players, game}} = this.props;
        return (
            <div>
                <br/>
                <h2>Congratulations {players.list[players.turn]}, you <b>WON !</b></h2>
                <br/>
                {this.state.scores.length > 0
                    ?
                    <div>
                        <h3>Scores</h3>
                        <Table>
                            <tr>
                                <Th>Players</Th>
                                <Th>Winner</Th>
                                <Th>Date</Th>
                            </tr>
                            {this.state.scores.map((score,i) => (
                                <tr key={i}>
                                    <Td>{score.players.toString()}</Td>
                                    <Td>{score.winner}</Td>
                                    <Td>{score.date}</Td>
                                </tr>
                            ))}
                        </Table>
                    </div>
                    : <div>No scores available</div>}
                <br/>
                <Button primary onClick={game.newGame}>New Game</Button>
            </div>
        )
    }
}

export default inject('store')(observer(Celebration));
