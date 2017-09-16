import { Observable } from 'rxjs';
import moment from 'moment';
import 'moment/locale/ja';

export const start = (dispatch) => (counter) => {
  moment.locale('ja');
  const watcher = Observable.timer(0, 10).subscribe((diff) => dispatch({
    type: 'update',
    time: moment.now(),
  }));
  return {
    type: 'start',
    watcher: watcher,
    startAt: moment.now() - counter
  }
};

export const stop = (watcher) => {
  watcher.unsubscribe();
  return {
    type: 'stop'
  }
};

export const clear = () => {
  return {
    type: 'clear'
  }
};

export const lap = (lap) => {
  return {
    type: 'lap',
    lap
  }
};
