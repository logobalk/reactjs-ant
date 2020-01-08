import React from 'react';
import className from 'classnames';
import {
  Input, Form,  Icon,
} from 'antd';
import Table from './index';
import styles from './editable.less';
import './index.css';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

/* eslint-disable */
class EditableCell extends React.Component {
  state = {
    editing: false,
  }

  toggleEdit = () => {
    const editing = !this.state.editing; // eslint-disable-line
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  }

  save = () => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  }

  render() {
    const { editing } = this.state;
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      ...restProps
    } = this.props;
    return (
      <td ref={node => { this.cell = node; }} {...restProps}>
        {editable ? (
          <EditableContext.Consumer>
            {(form) => {
              this.form = form;
              return (
                editing ? (
                  <FormItem style={{ margin: 0 }}>
                    {form.getFieldDecorator(dataIndex, {
                      rules: [{
                        required: true,
                        message: `${title} is required.`,
                      }],
                      initialValue: record[dataIndex],
                    })(
                      <Input
                        ref={node => { this.input = node; }}
                        onPressEnter={this.save}
                        onBlur={this.save}
                      />
                    )}
                  </FormItem>
                ) : (
                  // eslint-disable-next-line
                  <div
                    className={styles.editableCellValueWrap}
                    style={{ paddingRight: 24 }}
                    onClick={this.toggleEdit}
                  >
                    {restProps.children}
                  </div>
                )
              );
            }}
          </EditableContext.Consumer>
        ) : restProps.children}
      </td>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`,
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }

  handleSave = (row) => {
    // TODO : handle save
    // const newData = [...this.state.dataSource];
    // const index = newData.findIndex(item => row.key === item.key);
    // const item = newData[index];
    // newData.splice(index, 1, {
    //   ...item,
    //   ...row,
    // });
    // this.setState({ dataSource: newData });
  }

  render() {
    const { rowClassName, ...rest } = this.props;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const rowClass = (typeof rowClassName) === 'function' ? rowClassName() : rowClassName;

    // const paginationProps = {
    //   showSizeChanger: true,
    //   showQuickJumper: true,
    //   ...pagination,
    // };
    const columns = this.props.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });

    return (
      <div>
        {/* <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
          Add a row
        </Button> */}
        <Table
          components={components}
          rowClassName={className(styles.editableRow, rowClass)}
          // selectedRows={[]}
          {...rest}
          columns={columns}
        />
      </div>
    );
  }
}

export default EditableTable;