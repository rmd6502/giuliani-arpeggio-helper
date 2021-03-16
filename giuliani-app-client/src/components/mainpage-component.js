// Main page component

import React, { Component } from 'react';

// studyNoDifficylty will be a check box most likely
// study difficulty level will be radio buttons
// study result limit will be input box 
export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studyNoDifficulty: false,
      studyDifficultyLevel: '',
      studyResulLimit: '',
    }

    this.onChangeStudyNoDifficulty = this.onChangeStudyNoDifficulty.bind(this);
    this.onChangeStudyDifficultyLevel = this.onChangeStudyDifficultyLevel.bind(this);
    this.onChangeStudyResultLimit = this.onChangeStudyResultLimit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChangeStudyNoDifficulty(e) {
    this.setState({
      studyNoDifficulty: e.target.value
    })
  }

  onChangeStudyDifficultyLevel(e) {
    this.setState({
      studyDifficultyLevel: e.target.value
    })
  }

  onChangeStudyResultLimit(e) {
    this.setState({
      studyResulLimit: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form submitted:`);
    console.log(`All studies queried: ${this.state.studyNoDifficulty}`);
    console.log(`Difficulty Level: ${this.state.studyDifficultyLevel}`);
    console.log(`Limit results: ${this.state.studyResulLimit}`);

    this.props.history.push('/display');

  }

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h4>Query Giuliani 120 Righ Hand Studies Database</h4>

        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <div className="form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="level1"
                id="level1"
                value="1"
                checked={this.state.animal_isEndangered === '1' }
                onChange={this.onChangeStudyDifficultyLevel}
              />
              <label className="form-check-label">Level 1</label>
            </div>
            <div className="form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="level2"
                id="level2"
                value="2"
                checked={this.state.animal_isEndangered === '2' }
                onChange={this.onChangeStudyDifficultyLevel}
              />
              <label className="form-check-label">Level 2</label>
            </div>
            <div className="form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="level3"
                id="level3"
                value="3"
                checked={this.state.animal_isEndangered === '3' }
                onChange={this.onChangeStudyDifficultyLevel}
              />
              <label className="form-check-label">Level 3</label>
            </div>
            <div className="form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="level4"
                id="level4"
                value="4"
                checked={this.state.animal_isEndangered === '4' }
                onChange={this.onChangeStudyDifficultyLevel}
              />
              <label className="form-check-label">Level 4</label>
            </div>
            <div className="form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="level5"
                id="level5"
                value="5"
                checked={this.state.animal_isEndangered === '5' }
                onChange={this.onChangeStudyDifficultyLevel}
              />
              <label className="form-check-label">Level 5</label>
            </div>
            <div className="form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="level6"
                id="level6"
                value="6"
                checked={this.state.animal_isEndangered === '6' }
                onChange={this.onChangeStudyDifficultyLevel}
              />
              <label className="form-check-label">Level 6</label>
            </div>
          </div>

        </form>

      </div>
    )
  }
}