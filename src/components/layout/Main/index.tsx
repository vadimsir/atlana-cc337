import Header from './Header';

import styles from './index.module.scss';

interface Main {
  children: JSX.Element;
}

const Main = ({ children }: Main):JSX.Element => (
  <div className={styles.wrapper}>
    <Header />
    {children}
  </div>
);

export default Main;
