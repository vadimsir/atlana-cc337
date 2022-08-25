import { Repository } from '../../../../../hooks/repositories';

import styles from './index.module.scss';

interface CardRepo {
  repo: Repository;
}

const CardRepo = ({ repo }: CardRepo): JSX.Element => (
  <div className={styles.wrapper}>
    <div>{repo.name}</div>
    <div>
      <div>
        {repo.forks_count}
        : Forks
      </div>
      <div>
        {repo.stargazers_count}
        : Stars
      </div>
    </div>
  </div>
);

export default CardRepo;
