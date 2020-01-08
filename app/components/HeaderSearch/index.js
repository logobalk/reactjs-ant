/**
 *
 * HeaderSearch
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Input, Icon, AutoComplete } from 'antd';
import classNames from 'classnames';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './index.less';


class HeaderSearch extends React.PureComponent {
  static propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
    onChange: PropTypes.func,
    onPressEnter: PropTypes.func,
    defaultActiveFirstOption: PropTypes.bool,
    dataSource: PropTypes.array,
    defaultOpen: PropTypes.bool,
    onVisibleChange: PropTypes.func,
  };

  static defaultProps = {
    defaultActiveFirstOption: false,
    onPressEnter: () => { },
    onSearch: () => { },
    onChange: () => { },
    className: '',
    placeholder: '',
    dataSource: [],
    defaultOpen: false,
    onVisibleChange: () => { },
  };

  static getDerivedStateFromProps(props) {
    if ('open' in props) {
      return {
        searchMode: props.open,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      searchMode: props.defaultOpen,
      value: '',
    };
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  onKeyDown = e => {
    if (e.key === 'Enter') {
      const { onPressEnter } = this.props;
      const { value } = this.state;
      this.timeout = setTimeout(() => {
        onPressEnter(value); // Fix duplicate onPressEnter
      }, 0);
    }
  };

  onChange = value => {
    const { onSearch, onChange } = this.props;
    this.setState({ value });
    if (onSearch) {
      onSearch(value);
    }
    if (onChange) {
      onChange(value);
    }
  };

  enterSearchMode = () => {
    const { onVisibleChange } = this.props;
    onVisibleChange(true);
    this.setState({ searchMode: true }, () => {
      const { searchMode } = this.state;
      if (searchMode) {
        this.input.focus();
      }
    });
  };

  leaveSearchMode = () => {
    this.setState({
      searchMode: false,
      value: '',
    });
  };

  debouncePressEnter() {
    const { onPressEnter } = this.props;
    const { value } = this.state;
    onPressEnter(value);
  }


  render() {
    const { className, placeholder, open, ...restProps } = this.props;
    const { searchMode, value } = this.state;
    delete restProps.defaultOpen; // for rc-select not affected
    const inputClass = classNames(styles.input, {
      [styles.show]: searchMode,
    });
    return (
      // <div>
      //   <FormattedMessage {...messages.header} />
      // </div>
      /* eslint-disable-next-line */
      <span
        className={classNames(className, styles.headerSearch)}
        onClick={this.enterSearchMode}
        onTransitionEnd={({ propertyName }) => {
          if (propertyName === 'width' && !searchMode) {
            const { onVisibleChange } = this.props;
            onVisibleChange(searchMode);
          }
        }}
      >
        <Icon type="search" key="Icon" />
        <AutoComplete
          key="AutoComplete"
          {...restProps}
          className={inputClass}
          value={value}
          onChange={this.onChange}
        >
          <Input
            ref={node => {
              this.input = node;
            }}
            aria-label={placeholder}
            placeholder={placeholder}
            onKeyDown={this.onKeyDown}
            onBlur={this.leaveSearchMode}
          />
        </AutoComplete>
      </span>
    );
  }
}

export default HeaderSearch;
