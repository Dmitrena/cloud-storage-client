import { User } from '@/api/dto/auth.dto';
import { Button } from 'antd';
import { GetServerSidePropsContext, NextPage } from 'next';

import * as Api from '@/api';
import { Layout } from '@/layouts/Layout';
import styles from '@/styles/Profile.module.scss';
import { checkAuth } from '@/utils/checkAuth';
import React from 'react';

interface Props {
  userData: User;
}

const DashboardProfilePage: NextPage<Props> = ({ userData }) => {
  const onClickLogout = () => {
    if (window.confirm('Are you really want to log out?')) {
      Api.auth.logout();
      location.href = '/';
    }
  };

  return (
    <main>
      <div className={styles.root}>
        <h1>My profile</h1>
        <br />
        <p>
          ID: <b>{userData.id}</b>
        </p>
        <p>
          Full Name: <b>{userData.fullName}</b>
        </p>
        <p>
          E-Mail: <b>{userData.email}</b>
        </p>
        <br />
        <Button onClick={onClickLogout} type='primary' danger>
          Logout
        </Button>
      </div>
    </main>
  );
};

(DashboardProfilePage as any).getLayout = (page: React.ReactNode) => {
  return <Layout title='Dashboard / Profile'>{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }

  const userData = await Api.auth.getMe();

  return {
    props: {
      userData,
    },
  };
};

export default DashboardProfilePage;
