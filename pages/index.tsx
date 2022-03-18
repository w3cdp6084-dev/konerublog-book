import Link from "next/link";
import { client } from "../libs/client";
import { Input } from "@chakra-ui/react"

export default function Home({ blog }) {
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
      <Input
      w="30%"
      m="5"
      type="text"
      placeholder="Input Field"
      color="blue.800"
      bg="blue.50"
      rounded="2xl"
      border="0"
      _focus={{
        bg: "blue.200",
        outline: "none",
      }}
    />
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: data.contents,
    },
  };
};