import React from 'react';
import { Input, Switch } from 'antd';
import Table from 'containers/MaterialIdentityLabel/table';
import columns from './columns';

class N2gasTable extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  renderEnvironment = () => [
    {
      id: 1,
      creteria: 'N2 Gas  ต้องมี Gas ในระบบไม่น้อยกว่า 2 Bar',
      result: <Input onChange={() => { }} />,
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
        <TextArea placeholder="Note" autosize={{ minRows: 2, maxRows: 6 }} />
      </React.Fragment>
    );
  }
}

export default N2gasTable;
