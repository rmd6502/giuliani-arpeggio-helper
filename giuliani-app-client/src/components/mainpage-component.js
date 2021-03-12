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

    // this.props.history.push('/display');

  }

  render() {
    return (
      <div>
        <p>Welcome to Main Page Component!!</p>
      </div>
    )
  }
}