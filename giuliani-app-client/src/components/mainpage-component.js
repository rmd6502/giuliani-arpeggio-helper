// Main page component

// Simplified entry.
// TODO: Do a radio button version with .map

import React, { Component } from 'react';



export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studyDifficultyLevel: '1',
      studyResulLimit: '1',
    }

    this.onChangeStudyDifficultyLevel = this.onChangeStudyDifficultyLevel.bind(this);
    this.onChangeStudyResultLimit = this.onChangeStudyResultLimit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
    console.log(`Difficulty Level: ${this.state.studyDifficultyLevel}`);
    console.log(`Limit results: ${this.state.studyResulLimit}`);

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
                min="1"
                max="6"
                value={this.state.studyDifficultyLevel}
                onChange={this.onChangeStudyDifficultyLevel}
              />
          </div>
          <div className="form-group">
            <label>Limit results (1-10)</label>
            <input type="number"         
              min="1"
              max="10"
              value={this.state.studyResulLimit}
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