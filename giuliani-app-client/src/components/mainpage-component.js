// Main page component

import React, { Component } from 'react';

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studyDifficultyLevel: '',
      studyResulLimit: '',
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

    console.log(`Form submitted:`);
    console.log(`Difficulty Level: ${this.state.studyDifficultyLevel}`);
    console.log(`Limit results: ${this.state.studyResulLimit}`);

    this.props.history.push('/display');

  }

  render() {
    return (
      <div style={{marginTop: 10}}>
        <h4>Query Giuliani 120 Right Hand Studies Database</h4>
        <h6>Results are randomized.</h6>
        <br></br>
        <h5>Level:</h5>

        <form onSubmit={this.onSubmit}>
          
          <div className="form-group">
            <div className="form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="difficultyLevel"
                id="level1"
                value="1"
                defaultChecked
                onChange={this.onChangeStudyDifficultyLevel}
              />
              <label className="form-check-label">1</label>
            </div>
            <div className="form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="difficultyLevel"
                id="level2"
                value="2"
                onChange={this.onChangeStudyDifficultyLevel}
              />
              <label className="form-check-label">2</label>
            </div>
            <div className="form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="difficultyLevel"
                id="level3"
                value="3" 
                onChange={this.onChangeStudyDifficultyLevel}
              />
              <label className="form-check-label">3</label>
            </div>
            <div className="form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="difficultyLevel"
                id="level4"
                value="4"
                onChange={this.onChangeStudyDifficultyLevel}
              />
              <label className="form-check-label">4</label>
            </div>
            <div className="form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="difficultyLevel"
                id="level5"
                value="5"
                onChange={this.onChangeStudyDifficultyLevel}
              />
              <label className="form-check-label">5</label>
            </div>
            <div className="form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="difficultyLevel"
                id="level6"
                value="6"
                onChange={this.onChangeStudyDifficultyLevel}
              />
              <label className="form-check-label">6</label>
            </div>
            <div className="form-check-inline">
              <input className="form-check-input"
                type="radio"
                name="difficultyLevel"
                id="allLevels"
                value="all"
                onChange={this.onChangeStudyDifficultyLevel}
              />
              <label className="form-check-label">All</label>
            </div>
          </div>

          <div className="form-group">
            <label>Limit results (1-10): </label>
            <input type="number"
              className="form-control"             
              min="1"
              max="10"
              
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