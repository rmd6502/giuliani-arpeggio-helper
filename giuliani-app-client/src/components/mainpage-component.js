// Main page component

// Simplified entry.
// TODO: Do a radio button version with .map

import React, { Component } from 'react';

const Study = props => {
  return (
    <tr key={props.studyID}>
      <td>{props.study.difficulty}</td>
      <td>{props.study.studyNum}</td>
      <td><img src={props.study.studyPath}></img></td>
    </tr>
  )
}

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studyDifficultyLevel: '1',
      studyResultLimit: '1',
      studyNoDifficulty: false,
      studies: []
    }

    this.onChangeStudyDifficultyLevel = this.onChangeStudyDifficultyLevel.bind(this);
    this.onChangeStudyResultLimit = this.onChangeStudyResultLimit.bind(this);
    this.onChangeStudyNoDifficulty = this.onChangeStudyNoDifficulty.bind(this);
    this.studyList = this.studyList.bind(this);
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
  
    const diffLevel = this.state.studyDifficultyLevel;
    const resultLimit = this.state.studyResultLimit;

    fetch('http://localhost:5000/get-randomized-studies-by-difficulty?' + new URLSearchParams({
        difficulty: diffLevel,
        limit: resultLimit
      }), {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
    })
    .then( res => {
      return res.json()
    })
    .then ( data => {
      this.setState({ studies: data })
    })
    .catch( (error) => {
      console.log(error);
    })

    // reset state for 'no difficulty level' checkbox
    this.setState({
      studyNoDifficulty: false
    })

  }

  studyList() {
    if(this.state.studies) {
      return this.state.studies.map( (currentStudy, i ) => {
        return ( <Study study={currentStudy} studyID={i.toString} /> )
      })
    } else {
      return null; 
    }
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
            <label>Or No Difficulty Level:</label>
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

        <div>
        <h4>Results: </h4>
        <table className="table" style={{ marginTop: 20 }} >
          <thead>
            <tr>
              <th>Level</th>
              <th>Number</th>
              <th>Study</th>
            </tr>
          </thead>
          <tbody>
            { this.studyList() }
          </tbody>
        </table>
      </div>

      </div>  
    )
  }
}