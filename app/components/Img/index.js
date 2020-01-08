/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of the alt="" tag
 */

import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
import styles from './index.less';

function Img(props) {
  const { squared, position } = props;
  if (squared) {
    return (
      <div className={className(styles.square, props.className)} >
        <div className={styles.content}>
          <img
            className={
              className(
                styles.img,
                { [styles.center]: (position === 'center') },
                { [styles.bottom]: (position === 'bottom') },
              )
            }
            src={props.src}
            alt={props.alt}
          />
        </div>
      </div>
    );
  }

  return <img className={props.className} src={props.src} alt={props.alt} />;
}

// We require the use of src and alt, only enforced by react in dev mode
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  squared: PropTypes.bool,
  position: PropTypes.string,
};

export default Img;
