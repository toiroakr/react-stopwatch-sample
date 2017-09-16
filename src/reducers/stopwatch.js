export const initialState = {
  time: 0,
  watcher: null,
  startAt: 0,
  laps: []
};

export default (state = initialState, payload) => {
  switch (payload.type) {
    case 'start':
    case 'update':
      return {
        ...state,
        ...payload
      };
    case 'stop':
      return {
        ...state,
        watcher: null
      };
    case 'clear':
      return { ...initialState };
    case 'lap':
      return {
        ...state,
        laps: [...state.laps, payload.lap]
      };
    default:
      return state;
  }
};