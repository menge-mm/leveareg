import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Layout from '@/components/layout';
import StepForm from '@/components/organisms/reg-form';
import RegFormProvider from '@/components/organisms/reg-form/reducer';
import { steps } from '@/components/organisms/reg-form/steps';

export default function Home() {
  return (
    <Layout pageTitle="نموذج تسجيل المريض" arabic={true}>
      <RegFormProvider>
        <StepForm steps={steps} />
      </RegFormProvider>
    </Layout>
  );
}
