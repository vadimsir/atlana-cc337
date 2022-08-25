import Main from '../../components/layout/Main';
import Content from '../../components/pages/Users';

const Users = (): JSX.Element => {
  document.title = 'Atlana: Users';

  return (
    <Main>
      <Content />
    </Main>
  );
};

export default Users;
