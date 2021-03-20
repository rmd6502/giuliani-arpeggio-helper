// Main page component

// Simplified entry.
// TODO: Do a radio button version with .map

import React, { Component } from 'react';

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studyDifficultyLevel: '1',
      studyResultLimit: '1',
      studyNoDifficulty: false
    }

    this.onChangeStudyDifficultyLevel = this.onChangeStudyDifficultyLevel.bind(this);
    this.onChangeStudyResultLimit = this.onChangeStudyResultLimit.bind(this);
    this.onChangeStudyNoDifficulty = this.onChangeStudyNoDifficulty.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeStudyDifficultyLevel(e) {
    this.setState({
      studyDifficultyLevel: e.target.value
    })
  }

  onChangeStudyResultLimit(e) {
    this.setState({
      studyResultLimit: e.target.value
    })
  }

  onChangeStudyNoDifficulty(e) {
    this.setState({
      studyNoDifficulty: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Difficulty Level: ${this.state.studyDifficultyLevel}`);
    console.log(`Limit results: ${this.state.studyResultLimit}`);
    console.log(`No difficulty level: ${this.state.studyNoDifficulty}`)

    this.props.history.push('/display');
  }

  render() {
    return (
      <div style={{marginTop: 10}}>
        
        <h4>Query Giuliani 120 Right Hand Studies</h4>
        <h6>Results are randomized.</h6>
        <br></br>
        
        <form onSubmit={this.onSubmit}>     

          <div className="form-group">
            <label>Enter Difficulty Level (1-6)</label>
              <input type="number"
                className="form-control"
                min="1"
                max="6"
                value={this.state.studyDifficultyLevel}
                onChange={this.onChangeStudyDifficultyLevel}
              />
          </div>

          <div className="form-group">
            <label>No Difficulty Level::</label>
            <input
              name="noDifficultyLevel"
              type="checkbox"
              checked={this.state.studyNoDifficulty }
              onChange={this.onChangeStudyNoDifficulty}
            />
            
          </div>

          <div className="form-group">
            <label>Limit results (1-10)</label>
            <input type="number"       
              className="form-control"  
              min="1"
              max="10"
              value={this.state.studyResultLimit}
              onChange={this.onChangeStudyResultLimit}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>

        </form> 

      </div>  
    )
  }
}