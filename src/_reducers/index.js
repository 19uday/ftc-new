import { combineReducers } from 'redux';

import { authentication } from './users.reducer';
import { alert } from './alert.reducer';
import { overView } from './overView.reducer';
import { opTable } from './opTable.reducer';
import { siteImage } from './siteImage.reducer';
import { tracker } from './tracker.reducer';

const rootReducer = combineReducers({
  authentication,
  alert,
  overView,
  tracker,
  opTable,
  siteImage,
});

export default rootReducer;
