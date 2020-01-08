import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

export const validStatusComponents = {
  body: {
    cell: ({ isValidStatus, record, text, ...props }) => {
      if (isValidStatus) {
        const { status } = record;
        if (status) {
          const { className } = props;
          return (
            <td
              {...props}
              className={
                classNames([
                  className,
                  {
                    [styles.success]: status ===  1,
                    [styles.warn]: status === 2,
                    [styles.fail]: status === 3,
                  },
                ])
              }
            >
              {text}
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