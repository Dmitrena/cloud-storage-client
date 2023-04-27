import * as api from '@/api';
import axios from '@/core/axios';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';

export const checkAuth = async (ctx: GetServerSidePropsContext) => {
  const { access_token } = nookies.get(ctx);

  axios.defaults.headers.Authorization = 'Bearer ' + access_token;

  try {
    await api.auth.getMe();

    return {
      props: {},
    };
  } catch (err) {
    return {
      redirect: {
        destination: '/dashboard/auth',
        permanent: false,
      },
    };
  }
};
