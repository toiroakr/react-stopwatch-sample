import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Subscription } from 'rxjs';
import moment from 'moment';
import cssModules from 'react-css-modules';
import style from './stopwatch.css';

import * as timer from '../../actions/stopwatch';
import { initialState } from '../../reducers/stopwatch';

class Stopwatch extends Component {
  static propTypes = {
    time: PropTypes.number.isRequired,
    watcher: PropTypes.instanceOf(Subscription),
    startAt: PropTypes.number.isRequired,
    laps: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  render() {
    const { time, watcher, startAt, laps, timer } = this.props;
    return (
      <div>
        <h1>React stopwatch sample</h1>
        <p className="time">{moment(time - startAt).format('mm:ss.SSS')}</p>
        <div className="buttons">
          <button onClick={!watcher
            ? () => timer.start(time - startAt)
            : () => timer.stop(watcher)
          }>
            {!watcher ? 'start' : 'stop'}
          </button>
          <button onClick={!watcher
            ? timer.clear
            : () => timer.lap(moment(time - startAt).format('mm:ss.SSS'))
          }>
            {!watcher ? 'clear' : 'lap'}
          </button>
        </div>
        {laps.length > 0 ?
          <table>
            <thead>
            <th>#</th>
            <th>time</th>
            </thead>
            <tbody>
            {laps.map((lap, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{lap}</td>
              </tr>
            ))}
            </tbody>
          </table> : null
        }
      </div>
    );
  }
}

export default connect(
  state => {
    return {
      ...initialState,
      ...state.stopwatch
    }
  },
  (dispatch) => {
    return {
      timer: {
        start: bindActionCreators(timer.start(dispatch), dispatch),
        stop: bindActionCreators(timer.stop, dispatch),
        clear: bindActionCreators(timer.clear, dispatch),
        lap: bindActionCreators(timer.lap, dispatch),
      }
    }
  }
)(cssModules(Stopwatch, style));
