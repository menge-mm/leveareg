import Layout from "@/components/layout";
import HealthSpecialistInfo from "@/components/organisms/health-specialist-info";
import SearchProvider from "@/contexts/search";

const Page = () => {
  return (
    <Layout pageTitle="Health Specialist Information">
      <HealthSpecialistInfo />
    </Layout>
  );
};

export default Page;
