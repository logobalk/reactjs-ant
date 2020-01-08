import React from 'react';
import PropTypes from 'prop-types';
import { Input, Switch, InputNumber, Textarea } from 'antd';
import Table from 'containers/MaterialIdentityLabel/table';
import Chip from '@material-ui/core/Chip';
import Home from '@material-ui/icons/Home';
import uuid from 'uuid';
import { withStyles } from '@material-ui/core/styles';
import styles from './weightBoothEff.style';
import columns from './columns';

class WeightBoothEffTable extends React.Component {
  static propTypes = {
    classes: PropTypes.object,
  };

  static defaultProps = {};

  renderEnvironment = () => [
    {
      id: 1,
      criteria: 'HEPA FILTER01',
      acceptanceLimit: '75-400',
      result: <InputNumber defaultValue="100" onChange={() => { }} />,
      systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
    },
    {
      id: 2,
      criteria: 'HEPA FILTER02',
      acceptanceLimit: '75-400',
      result: <InputNumber defaultValue="100" onChange={() => { }} />,
      systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
    },
    {
      id: 3,
      criteria: 'HEPA FILTER03',
      acceptanceLimit: '75-400',
      result: <InputNumber  defaultValue="100" onChange={() => { }} />,
      systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
    },
    {
      id: 4,
      criteria: 'PRE FILTER 01',
      acceptanceLimit: '40-250',
      result: <InputNumber defaultValue="100" onChange={() => { }} />,
      systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
    },
    {
      id: 5,
      criteria: 'PRE FILTER 02',
      acceptanceLimit: '40-250',
      result: <InputNumber defaultValue="100" onChange={() => { }} />,
      systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
    },
    {
      id: 6,
      criteria: 'MEDIUM FILTER 01',
      acceptanceLimit: '50-300',
      result: <InputNumber  defaultValue="100" onChange={() => { }} />,
      systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
    },
    {
      id: 7,
      criteria: 'MEDIUM FILTER 02',
      acceptanceLimit: '50-300',
      result: <InputNumber  defaultValue="100" onChange={() => { }} />,
      systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
    },
  ];

  render() {
    const { TextArea } = Input;
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Table
          withNoFilter
          columns={columns}
          data={this.renderEnvironment()}
          tableOptions={{
            bordered: true,
            hidePagination: true,
          }}
        />
        <TextArea placeholder="Note" autosize={{ minRows: 2, maxRows: 6 }} />
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(WeightBoothEffTable);
