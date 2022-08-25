import { useSearchParams } from 'react-router-dom';
import React, { FormEvent, useState } from 'react';

import styles from './index.module.scss';

const Filter = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setValue] = useState<string>(searchParams.get('name') || '');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const params: Record<string, string> = {};

    if (value) {
      params.name = value;
    }

    setSearchParams(params);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder="Search for Users"
        className={styles.input}
      />
    </form>
  );
};

export default Filter;
