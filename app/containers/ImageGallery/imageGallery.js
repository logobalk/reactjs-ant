import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import uuid from 'uuid';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styles from './imageGallery.style';
import imagesData from './imageGelleryData';

class ImageGalleryComponent extends React.Component {
  render() {
    // const { classes } = this.props;
    return (
      <ImageGallery
        showThumbnails
        showGalleryFullscreenButton
        showNav
        showBullets
        showPlayButton={false}
        thumbnailPosition='bottom'
        items={imagesData.images}
      />
    );
  }
}
export default withStyles(styles)(ImageGalleryComponent);
