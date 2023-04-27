import { getColorByExtension } from '@/utils/getColorByExtension';
import { getExtensionFromFileName } from '@/utils/getExtensionFromFileName';
import { isImage } from '@/utils/isImage';
import { FileTextOutlined } from '@ant-design/icons';
import { FC } from 'react';
import styles from './FileCard.module.scss';

interface FileCardProps {
  filename: string;
  originalName: string;
}

export const FileCard: FC<FileCardProps> = ({ originalName, filename }) => {
  const ext = getExtensionFromFileName(filename);
  const imageUrl =
    ext && isImage(ext) ? 'http://localhost:4003/uploads/' + filename : '';

  const color = getColorByExtension(ext);
  const classColor = styles[color];

  return (
    <div className={styles.root}>
      <div className={styles.icon}>
        <i className={classColor}>{ext}</i>
        {isImage(ext) ? (
          <img className={styles.image} src={imageUrl} alt='File' />
        ) : (
          <FileTextOutlined />
        )}
      </div>
      <span>{originalName}</span>
    </div>
  );
};
