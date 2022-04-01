import Link from "next/link";
import { client } from "../libs/client";
import Date from "../src/components/utils/Dates";
import styles from '../src/styles/common.module.scss';
import { Pagination } from '../src/components/utils/Pagination';


export default function Home({ blog,totalCount }) {
  return (
    <div className={styles.mainIner}>
        <ul className={styles.lists}>
          {blog.map((blog) => (
            <Link href={`/blog/${blog.id}`}>
              <li key={blog.id} className={styles.list}>
                <div>
                <img
                  alt="thumbnail"
                  role="presentation"
                  src={blog.ogpimg && `${blog.ogpimg.url}`}
                />
                </div>
                <div>
                  <p>{blog.category && `${blog.category.name}`}</p>
                </div>
                <div>
                  <Date dateString={blog.publishedAt} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: `${blog.body}`,}}></div>
              </li>
            </Link>
          ))}
        </ul>
        <Pagination totalCount={totalCount} />
    </div>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  const key = {
    headers: {'X-MICROCMS-API-KEY': process.env.API_KEY},
  };
  const datas = await fetch('https://konerublog-book.microcms.io/api/v1/blog?offset=0&limit=5', key)
  .then(res => res.json())
  .catch(() => null);
  return {
    props: {
      blog: data.contents,
      totalCount: datas.totalCount
    },
  };
};

