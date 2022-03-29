import Link from "next/link";
import { client } from "../libs/client";
import Date from "../src/components/utils/date";
import styles from '../src/styles/common.module.scss';


export default function Home({ blog }) {
  return (
    <div className={styles.mainIner}>
        <ul className={styles.lists}>
          {blog.map((blog) => (
            <li key={blog.id} className={styles.list}>
              <Link href={`/blog/${blog.id}`}>
                <a>{blog.title}</a>
              </Link>
              <div>
                <Date dateString={blog.publishedAt} />
              </div>
              <div>
                <p>{blog.category && `${blog.category.name}`}</p>
              </div>
            </li>
          ))}
        </ul>

    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};

