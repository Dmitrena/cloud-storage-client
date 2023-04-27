import { Header } from '@/components/Header';
import Head from 'next/head';

import styles from '@/styles/Home.module.scss';
import { FC } from 'react';

interface LayoutProps {
  title: string;
}

export const Layout: FC<React.PropsWithChildren<LayoutProps>> = ({
  title,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Header />
        <div className={styles.main}>
          <div className={styles.layout}>{children}</div>
        </div>
      </main>
    </>
  );
};
