import { Link } from 'react-router-dom';
import style from './Pagination.module.css';

const Pagination = ({ page, totalPages, category }) => (
  <div className={style.pagination}>
    {[...Array(totalPages).keys()].map((x) => (
      <span
        key={x}
        className={Number(page) === x + 1 ? style.active : style.inactive}
      >
        {category === 'new' || category === 'popular' ? (
          <Link to={`/${x + 1}/`}>{x + 1}</Link>
        ) : (
          <Link to={`/${category}/${x + 1}`}>{x + 1}</Link>
        )}{' '}
      </span>
    ))}
  </div>
);

export default Pagination;
