import Link from "next/link";
import { client } from "../libs/client";
import Date from "../src/components/utils/Dates";
import styles from '../src/styles/common.module.scss';

export default function Home({ blog }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
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
                    <div className={styles.categoryWrap}>
                      <p className="text-sm text-center">{blog.category && `${blog.category.name}`}</p>
                    </div>
                    <div className="date">
                      <Date dateString={blog.publishedAt} />
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: `${blog.body}`,}} className={styles.body}></div>
                  </li>
              </Link>
            ))}
        </ul>
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