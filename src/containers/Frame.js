import React, { Component } from 'react';
import Title from 'components/Title';
import MatchContainer from 'containers/MatchContainer';
import { default as appActions } from 'actions/appActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import style from 'styled-components';

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

    const {
      tournamentName,
      tournamentDate,
      contestants,
      results
    } = this.props;

    return (
      <FrameWrapper>
        <SectionWrapper>
          <Title
            name={ tournamentName }
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