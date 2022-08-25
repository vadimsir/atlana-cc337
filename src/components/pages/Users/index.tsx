import List from './List';
import Filter from './Filter';

import styles from './index.module.scss';

const Users = (): JSX.Element => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>GitHub Searcher</h1>
    <Filter />
    <List />
  </div>
);

export default Users;
