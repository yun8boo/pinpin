import { GuardLayout } from '@/components/layout/guard-layout';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <GuardLayout>
      <div>
        <p>index</p>
        <button>Hello daisyUI</button>
      </div>
    </GuardLayout>
  );
};

export default Home;
