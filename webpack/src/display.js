import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';


class Display extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentWillMount() {
    console.log(this.props)
    this.props.actions.fetchRepos('netflix')
    .then(this.props.actions.fetchContributors('netflix', 'Hystrix'))
  }
  
  render() {
    return (
      <div>
        <div> Org: {this.props.organization.organizationName} </div>
        <div> NetFlix Repos: </div>
          <ul>
            {this.props.repos.forEach(r => {return <li>r</li>})}
          </ul>
        <div> NetFlix Contributors: </div>
          <ul>
            {this.props.contributors.forEach(r => {return <li>r</li>})}
          </ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
      organization: state.organization,
      repos: state.repos,
      contributors: state.contributors
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);