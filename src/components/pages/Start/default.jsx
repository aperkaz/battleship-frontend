import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'mobx-router';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';
import views from '../../../config/views';

const Ol = styled.ol`
    text-align: justify;
    display: inline-block;
`;

const Image = styled.img`
  height: 200px;
`;

class Start extends React.Component {

    componentDidMount(){
      console.log(this.props);
        this.props.store.game.newGame();
    }

    render() {
        const {store} = this.props;
        return (
            <div>
                <p>Welcome to a two player {store.game.title} game!</p>
                <br/>
                <Image src="http://moziru.com/images/war-clipart-battleship-14.jpg" alt="battleship"/>
                <br/>
                <p>
                    Build following the rules for the "1990 Milton Bradley" version, presented &nbsp;
                    <a href="https://en.wikipedia.org/wiki/Battleship_(game)#Variations">HERE</a>.
                </p>
                <br/>
                <div>
                    <Ol>
                        <li>Each player arranges their ships</li>
                        <li>Start playing</li>
                        <li>The player who sinks all the ships of the other player first, wins!</li>
                    </Ol>
                </div>
                <br/>
                <Link view={views.preparation} store={store}>
                    <Button primary>Go to ship preparation</Button>
                </Link>
            </div>
        )
    }
}


export default inject('store')(observer(Start));
