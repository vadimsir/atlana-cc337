import { Link } from 'react-router-dom';

import { User } from '../../../../../hooks/users';

import styles from './index.module.scss';

interface Card {
  user: User;
}

const Card = ({ user }: Card): JSX.Element => (
  <div className={styles.card}>
    <div className={styles.avatar}>
      <img src={user.avatar_url} alt={user.login} className={styles.img} />
    </div>
    <div className={styles.name}>
      <Link to={`/users/${user.login}`}>{user.login}</Link>
    </div>
    <div>{user.score}</div>
  </div>
);

export default Card;
