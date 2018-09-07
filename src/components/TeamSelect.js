import React, { Component } from 'react';
import axios from 'axios';
import Qs from 'qs';
import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';

// COMPONENTS
import CharacterBlock from './CharacterBlock';
import TeamName from './TeamName';
import Search from './Search';

class TeamSelect extends Component {
    render() {
        return (
            <section className="teamSelectSection">
                <TeamName />

                <CharacterBlock />
                <CharacterBlock />
                <CharacterBlock />
                <CharacterBlock />
                <CharacterBlock />

                <div className="teamSelectButtonsContainer">
                    <button className="saveTeamButton button">Save Team</button>

                    <Link to="/battle"><button className="goBattleButton button">Go Battle</button></Link>

                    <p className="teamWinRatio"></p>

                    <Search addToTeamArray={this.props.addToTeamArray} />
                </div>
            </section>
        );
    }
}

export default TeamSelect;