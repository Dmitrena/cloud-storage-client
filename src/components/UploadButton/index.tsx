import * as api from '@/api';
import styles from '@/styles/Home.module.scss';
import { CloudUploadOutlined } from '@ant-design/icons';
import { Button, Upload, UploadFile, notification } from 'antd';
import { FC, useState } from 'react';

const UploadButton: FC = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onUploadSuccess = async (options: any) => {
    try {
      const file = await api.files.uploadFile(options);

      setFileList([]);
    } catch (err) {
      notification.error({
        message: 'Error!',
        description: "Can't upload file",
        duration: 2,
      });
    }
  };
  return (
    <Upload
      customRequest={onUploadSuccess}
      fileList={fileList}
      onChange={({ fileList }) => setFileList(fileList)}
      className={styles.upload}
    >
      <Button type='primary' icon={<CloudUploadOutlined />} size='large'>
        Upload file
      </Button>
    </Upload>
  );
};

export default UploadButton;
