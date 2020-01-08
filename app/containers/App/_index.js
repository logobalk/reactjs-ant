// /**
//  *
//  * App
//  *
//  * This component is the skeleton around the actual pages, and should only
//  * contain code that should be seen on all pages. (e.g. navigation bar)
//  */

// import React from 'react';
// import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
// import { Switch, Route } from 'react-router-dom';
// import { withStyles, CssBaseline } from '@material-ui/core';

// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
// import NavigatorBar from '../Navigator';


// import GlobalStyle from '../../global-styles';

// const AppWrapper = styled.div`
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   flex-direction: column;
// `;

// const styles = theme => ({
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing.unit * 3,
//     height: '100vh',
//     overflow: 'auto',
//   },
//   appBarSpacer: theme.mixins.toolbar,
//   root: {
//     flexGrow: 1,
//   },
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// });

// export default withStyles(styles)(props => {

//   const handleDrawerToggle = () => {
//     console.log('handleDrawerToggle')
//     setStateMenuAction();
//   };
//   const { classes, setStateMenuAction } = props;
//   return (
//     <AppWrapper>
//       <Helmet
//         titleTemplate="%s - React.js Boilerplate"
//         defaultTitle="React.js Boilerplate"
//       >
//         <meta name="description" content="A React.js Boilerplate application" />
//       </Helmet>
//       <CssBaseline />
//       <div>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//               <MenuIcon onClick={handleDrawerToggle} />
//             </IconButton>
//             <Typography variant="h6" color="inherit" className={classes.grow}>
//               Sampling & Dispensing
//             </Typography>
//             <Button color="inherit">Login</Button>
//           </Toolbar>
//         </AppBar>
//         <Header />
//         <nav >
//           <NavigatorBar />
//         </nav>
//         <div className={classes.content}>
//           <div className={classes.appBarSpacer} />
//           <Switch>
//             <Route exact path="/" component={HomePage} />
//             <Route path="/features" component={FeaturePage} />
//             <Route path="" component={NotFoundPage} />
//           </Switch>
//         </div>
//       </div>
//       <Footer />
//       <GlobalStyle />
//     </AppWrapper>
//   );
// });
