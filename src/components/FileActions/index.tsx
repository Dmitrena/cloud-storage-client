import { Button, Popconfirm } from 'antd';
import React from 'react';
import styles from './FileActions.module.scss';

interface FileActionsProps {
  onClickRemove: VoidFunction;
  onClickShare: VoidFunction;
  isActive: boolean;
}

export const FileActions: React.FC<FileActionsProps> = ({
  onClickRemove,
  onClickShare,
  isActive,
}) => {
  return (
    <div className={styles.root}>
      <Button onClick={onClickShare} disabled={!isActive}>
        Поделиться
      </Button>

      <Popconfirm
        title='Delete file(s)?'
        description='All files will be deleted ang put into trash'
        okText='Yes'
        cancelText='No'
        disabled={!isActive}
        onConfirm={onClickRemove}
      >
        <Button disabled={!isActive} type='primary' danger>
          Delete
        </Button>
      </Popconfirm>
    </div>
  );
};
