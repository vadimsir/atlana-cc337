import Main from '../../components/layout/Main';
import Content from '../../components/pages/Users';
import UsersProvider from '../../contexts/user';

const Users = (): JSX.Element => {
  document.title = 'Atlana: Users';

  return (
    <Main>
      <UsersProvider>
        <Content />
      </UsersProvider>
    </Main>
  );
};

export default Users;
