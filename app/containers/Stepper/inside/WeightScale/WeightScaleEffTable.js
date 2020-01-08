import React from 'react';
import { Input, Switch, InputNumber, Textarea } from 'antd';
import Table from 'containers/MaterialIdentityLabel/table';
import columns from './columns';

class WeightScaleEffTable extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  renderEnvironment = () => [
    {
      id: 1,
      criteria: 'Next Calibration due date',
      result: <Input defaultValue="05.09.2019" onChange={() => { }} />,
      systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
    },
    {
      id: 2,
      criteria: 'Average weight for Daily check (FM-QA-CV-24)',
      result: <InputNumber style={{ width: '100%' }} defaultValue={4.999} onChange={() => { }} />,
      systemEvaluate: <Switch checkedChildren="Pass" defaultChecked />,
    },
  ];

  render() {
    const { TextArea } = Input;
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
        <TextArea placeholder="Note" autosize={{ minRows: 2, maxRows: 6 }}/>
      </React.Fragment>
    );
  }
}

export default WeightScaleEffTable;
