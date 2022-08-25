import Card from './Card';
import { useContextUsers } from '../../../../contexts/user';

const List = (): JSX.Element => {
  const { usersGet } = useContextUsers();

  return (
    <div>
      {usersGet?.data.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
};

export default List;
