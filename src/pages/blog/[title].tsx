import React, { useEffect } from "react";
import { healthInfo } from "@/constants/search";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import styles from "./title.module.css";

const Page = () => {
  const router = useRouter();
  const title = router.query.title;
  const [info] = healthInfo.filter((info) => info.title === title) || [];
  if (!info) {
    return <Layout pageTitle="Not Found">Not Found</Layout>;
  }
  return (
    <Layout pageTitle={title as string}>
      <div className={styles.markdown}>
        <ReactMarkdown>{info?.content || ""}</ReactMarkdown>
      </div>
      <div className="mt-5">
        {info.tags.map((tag) => (
          <span
            className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm mx-auto mr-1"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </Layout>
  );
};

export default Page;
