import Router from 'next/router';
import Link from 'next/link';
import styles from '../../styles/common.module.scss';

export const Pagination = ({ totalCount }) => {
  const PER_PAGE = 5;

  const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

  return (
    <div className={styles.pageList}>
        <ul>
        {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
            <li key={index}>
                <Link href={ `/blog/page/${number}`}>
                    <a>{number}</a>
                </Link>
            </li>
        ))}
        </ul>
    </div>
  );
};