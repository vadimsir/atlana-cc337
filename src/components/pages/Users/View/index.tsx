import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import CardRepo from './CardRepo';
import { useUsersGetId } from '../../../../hooks/users';
import { useRepositoriesGetId } from '../../../../hooks/repositories';

import styles from './index.module.scss';

const View = (): JSX.Element => {
  const { id = '' } = useParams<{ id: string; }>();
  const usersGetId = useUsersGetId();
  const repositoriesGetId = useRepositoriesGetId();

  const [value, setValue] = useState<string>('');

  useEffect(() => {
    if (id) {
      usersGetId.fetch(id);
      repositoriesGetId.fetch(id);
    }
  }, [id]);

  return (
    <div>
      {usersGetId.loading ? (
        <div>Loading...</div>
      ) : usersGetId.data && (
        <div className={styles.content}>
          <h1 className={styles.title}>GitHub Searcher</h1>
          <div className={styles.main}>
            <div className={styles.avatar}>
              <img src={usersGetId.data.avatar_url} alt={usersGetId.data.login} className={styles.img} />
            </div>

            <div className={styles.info}>
              <div>{usersGetId.data.name}</div>
              <div>{usersGetId.data.email}</div>
              <div>{usersGetId.data.location}</div>
              <div>{usersGetId.data.created_at}</div>
              <div>
                {usersGetId.data.followers}
                {' '}
                Followers
              </div>
              <div>
                {usersGetId.data.following}
                {' '}
                Following
              </div>
            </div>
          </div>
          <div>This is their biography. It may be long and needs to all fit</div>
          <input
            type="text"
            value={value}
            onChange={({ target }) => setValue(target.value)}
            className={styles.search}
            placeholder={'Search for User\'s Repositories'}
          />
          {repositoriesGetId.loading ? (
            <div>Loading...</div>
          ) : repositoriesGetId.data.filter((repo) => repo.name.includes(value)).map((repo) => (
            <CardRepo key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default View;
