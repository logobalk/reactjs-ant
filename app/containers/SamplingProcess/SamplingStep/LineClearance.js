import React from 'react';
import classNames from 'classnames';
import { Input, Radio } from 'antd';
import Table from './table';
import columns from './table/columns.line';
import styles from './index.less';

const RadioGroup = Radio.Group;
const EvaluateRadio = (
  <RadioGroup onChange={() => { }}>
    <Radio value={1}>Passed</Radio>
    <Radio value={2}>Failed</Radio>
  </RadioGroup>
);
class LineClearanceStep extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  renderTools = () => [
    {
      id: 1,
      criteria: 'การประเมินผล Presure Diff. เป็นไปตามที่กำหนด Ref. FM-LO-XX-10',
      evaluate: EvaluateRadio,
      validStatus: 'PASS',
    },
    {
      id: 2,
      criteria: 'การตรวจสอบความสะอาด ห้องต้องสะอาด ไม่มีรอยแตกร้าว ไม่มีฝุ่นผง',
      evaluate: EvaluateRadio,
      validStatus: 'PASS',
    },
    {
      id: 3,
      criteria: 'ไม่พบวัสดุอื่นที่ไม่เกี่ยวข้อง หรือวัสดุที่ผ่านการใช้งานแล้ว',
      evaluate: EvaluateRadio,
      validStatus: 'PASS',
    },
    {
      id: 4,
      criteria: 'พนักงานแต่งกายได้ถูกต้องตามที่กำหนด (WI-LO-XX-09)',
      evaluate: EvaluateRadio,
      validStatus: 'PASS',
    },
    {
      id: 5,
      criteria: 'พนักงานมีสุขภาพแข็งไม่มีอาการป่วย เช่น ไข้หวัด ท้องเสีย บาดแผลเปิดตามร่างกาย',
      evaluate: EvaluateRadio,
      validStatus: 'FAIL',
    },
    {
      id: 6,
      criteria: <div>Note : <Input /></div>,
    },
  ];

  render() {
    const components = {
      body: {
        cell: ({ isValidStatus, record, ...props }) => {
          if (isValidStatus) {
            const status = record.validStatus;
            if (status) {
              const { className } = props;
              return (
                <td
                  {...props}
                  className={
                    classNames([
                      className,
                      {
                        [styles.success]: status === 'PASS',
                        [styles.fail]: status === 'FAIL',
                      },
                    ])
                  }
                >
                  {props.children}
                </td>
              );
            }
          }
          return (
            <td {...props}>
              {props.children}
            </td>
          );
        },
      },
    };

    return (
      <Table
        withNoFilter
        columns={columns}
        data={this.renderTools()}
        tableOptions={{
          components,
          bordered: true,
          hidePagination: true,
        }}
      />
    );
  }
}

export default LineClearanceStep;