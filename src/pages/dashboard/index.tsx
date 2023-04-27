import * as api from '@/api';
import { FileItem } from '@/api/dto/files.dto';
import { DashboardLayout } from '@/layouts/DashboardLayout';
import { Layout } from '@/layouts/Layout';
import { Files } from '@/modules/Files';
import { checkAuth } from '@/utils/checkAuth';
import { GetServerSidePropsContext, NextPage } from 'next';
import { useRouter } from 'next/router';

interface Props {
  items: FileItem[];
}

const DashboardPage: NextPage<Props> = ({ items }) => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  return (
    <DashboardLayout>
      <Files items={items} withActions />
    </DashboardLayout>
  );
};

(DashboardPage as any).getLayout = (page: React.ReactNode) => {
  return <Layout title='Dashboard / Main'>{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }

  try {
    const items = await api.files.getAll();
    return {
      props: {
        items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: { items: [] },
    };
  }

  return {
    props: {},
  };
};

export default DashboardPage;
