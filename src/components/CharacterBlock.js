import React, { Component } from 'react';

import {
    BrowserRouter as Router,
    Route, Link
} from 'react-router-dom';

import Search from './Search';

class CharacterBlock extends Component {
    render() {
        return (
            <div>
                {!this.props.chara ?

                    <div className="selectCharacterBlock">
                        {/* ============================================ */}
                        {/* New Team: Character Select Block */}

                        <button className="selectCharacterButton button">Select Character</button>

                    </div>

                    :

                    <div className="displayCharacterBlock">
                        {/* ============================================ */}
                        {/* Existing Team: Display Character Block */}
                        {/* Character Image */}
                        <div className="characterImageContainer">
                            <img src={this.props.chara.img} alt={`${this.props.chara.name} Snapshot`} />
                        </div>
                        <h3>{this.props.chara.name}</h3>
                        {/* List of Stats */}
                        <ul className="statsList">
                            <li className="statsList__item">C: {this.props.chara.stats.com}</li>
                            <li className="statsList__item">D: {this.props.chara.stats.dur}</li>
                            <li className="statsList__item">I: {this.props.chara.stats.int}</li>
                            <li className="statsList__item">P: {this.props.chara.stats.pow}</li>
                            <li className="statsList__item">Sp: {this.props.chara.stats.spd}</li>
                            <li className="statsList__item">St: {this.props.chara.stats.str}</li>
                        </ul>

                        <button className="changeCharacterButton button">Change Character</button>

                    </div>
                }
            </div>
        )
    }
}

export default CharacterBlock;