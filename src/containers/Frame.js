import React, { Component } from 'react';
import Title from 'components/Title';
import MatchContainer from 'containers/MatchContainer';
import { default as appActions } from 'actions/appActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from 'styled-components';

class Frame extends Component {

  componentDidMount() {
    /*
      Get the redux actions
     */
    const {
      getTournament,
      getContestants,
      getResults
    } = this.props;

    /*
      Get the ID of this tournament
     */
    const tournamentId = window.location.pathname.split('/')[1];

    /*
      Fetch API data in parallel when component mounts
     */
    Promise.all([
      getTournament(tournamentId),
      getContestants(tournamentId),
      getResults(tournamentId)
    ]);
  }

  render() {
    const {
      tournamentName,
      tournamentDate,
      contestants,
      results,
      error
    } = this.props;

    /*
      Styled components for each section and for the frame itself
     */
    const SectionWrapper = style.div`
      width: 500px;
      display: block;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0px 0px 15px rgba(0,0,0,0.05);
    `;

    const FrameWrapper = style.div`
      padding: 25px 0;
      background-color: #EBECEE;
    `;

    return (
      <FrameWrapper>
        <SectionWrapper>
          <Title
            name={ tournamentName || error }
            date={ tournamentDate }
          >
          </Title>
        </SectionWrapper>
        <SectionWrapper>
          <MatchContainer
            contestants={ contestants }
            results={ results }
          ></MatchContainer>
        </SectionWrapper>
      </FrameWrapper>
    );
  }
}

function mapStateToProps(state) {
  /*
    Get the API data from the redux state, pass it to props
   */
  const {
    tournamentName,
    tournamentDate,
    contestants,
    results,
    error
  } = state.app;

  return {
    tournamentName,
    tournamentDate,
    contestants,
    results,
    error
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...appActions }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Frame);