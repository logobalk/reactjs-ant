import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  setStateMenuItem,
  setMenuItems,
  // setIsMobile,
} from './actions';

import {
  setStateMenuAction,
  // setStatePathction,
} from '../App/actions';

import NavigatorBar from './navigator';

const mapStateToProps = state => ({
  menuItems: state.get('navigationItems').toJS().menuItems,
  selectedMenuItem: state.get('navigationItems').toJS().selectedMenuItem,
  // isMobile: state.get('navigationItems').toJS().isMobile,
  menuOpen: state.get('global').toJS().menuOpen,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  setStateMenuItem,
  setMenuItems,
  // setIsMobile,
  setStateMenuAction,
  // setStatePathction,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(NavigatorBar);
