import Link from "next/link";
import { client } from "../libs/client";

  export default function List({blog}) {
    return (
      <div>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
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