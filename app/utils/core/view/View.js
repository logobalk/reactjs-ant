import React from 'react';
import PropTypes from 'prop-types';
import Measure from 'react-measure';

const View = (props) => {
  const { children, onResize } = props;
  const divProps = { ...props };
  delete divProps.onResize;

  if (!onResize) {
    return (
      <div {...divProps}>
        {children}
      </div>
    );
  }

  return (
    <Measure
      bounds
      onResize={onResize}
    >
      {({ measureRef }) => (
        <div ref={measureRef} {...divProps}>
          {children}
        </div>
      )}
    </Measure>
  );
};

View.propTypes = {
  onResize: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

View.defaultProps = {
  children: null,
  onResize: null,
};

export default View;
