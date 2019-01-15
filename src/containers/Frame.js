import React, { Component } from 'react';
import Title from 'components/Title';
import MatchContainer from 'containers/MatchContainer';
import { default as appActions } from 'actions/appActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Frame extends Component {

  componentDidMount() {
    const {
      getTournament,
      getContestants,
      getResults
    } = this.props;

    getTournament('177161');
    getContestants('177161');
    getResults('177161');
  }

  componentWillReceiveProps

  render() {

    const containerDivStyle = {
      width: '400px',
      display: 'block',
      margin: '0 auto',
      backgroundColor: '#fff'
    };

    const {
      tournamentName,
      tournamentDate,
      contestants,
      results
    } = this.props;

    return (
      <div
        style={{
          padding: '25px 0',
          backgroundColor: '#cfcfcf'
        }}
      >
        <div style={ containerDivStyle }>
          <Title
            name={ tournamentName }
            date={ tournamentDate }
          >
          </Title>
        </div>
        <div style={ containerDivStyle }>
          <MatchContainer
            contestants={ contestants }
            results={ results }
          ></MatchContainer>
        </div>
      </div>
    );
  }
}

Frame.propTypes = {};
Frame.defaultProps = {};

function mapStateToProps(state) {

  const {
    tournamentName,
    tournamentDate,
    contestants,
    results
  } = state.app;

  return {
    tournamentName,
    tournamentDate,
    contestants,
    results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...appActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Frame);