/**
 *
 * Search bar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Form, Card, DatePicker, Select, Button, Icon } from 'antd';
import moment from 'moment';
import styles from './searchBar.less';
import { newIconStyle, conformIconStyle, incidentIconStyle, rejectIconStyle } from '../statusIcon.styles';

class SearchBar extends React.Component {
  static propTypes = {
    classes: PropTypes.shape().isRequired,
  };

  static defaultProp = {};

  render() {
    const { classes } = this.props;

    const { Meta } = Card;
    const { RangePicker } = DatePicker;
    const { Option } = Select;

    const dateFormat = 'YYYY/MM/DD';
    return (
      <React.Fragment>
        <Card
          bordered={false}
        >
          <Meta
            style={{ paddingTop: '1em', paddingBottom: '1em' }}
            title="Sampling Prequalification"
            description="Please specific conform non-comform on any material before sent to sampling room."
          />
          <Card.Grid className={styles.gridStyle}>
            <div>
              <Form.Item
                label="Lot Created Date"
                vertical
              >
                <RangePicker
                  style={{ width: '100%' }}
                  defaultValue={[moment('2019/01/01', dateFormat), moment('2019/02/01', dateFormat)]}
                  format={dateFormat}
                />
              </Form.Item>
            </div>
          </Card.Grid>
          <Card.Grid className={styles.gridStyle}>
            <div>
              <Form.Item
                label="Inspection Lot Origin"
                vertical
              >
                <Select
                  // value={state.currency}
                  // size={size}
                  style={{ width: '100%' }}
                  onChange={this.handleCurrencyChange}
                  placeholder="--Please select lot origin--"
                >
                  <Option value="rmb">01</Option>
                  <Option value="dollar">09</Option>
                </Select>
              </Form.Item>
            </div>
          </Card.Grid>
        </Card>
        <Card className={styles.cardStyle}>
          <Button type="primary" htmlType="submit" icon="search">Search</Button>
          <Button style={{ marginLeft: 8 }} onClick={this.handleReset} icon="close">Clear</Button>
        </Card>
        <Card className={styles.cardStyle2} bodyStyle={{ padding: '10px 15px' }}>
          <span>
            <Icon type="question-circle" theme="filled" style={newIconStyle} /> = New
          </span>
          <span>
            , <Icon type="check-circle" theme="filled" style={conformIconStyle} /> = Conform
          </span>
          <span>
            , <Icon type="exclamation-circle" theme="filled" style={incidentIconStyle} /> = Incident Requested
          </span>
          <span>
            , <Icon type="issues-close" style={incidentIconStyle} /> = Incident Concluded
          </span>
          <span>
            , <Icon type="close-circle" theme="filled" style={rejectIconStyle} /> = Reject
          </span>
        </Card>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SearchBar);
