import Main from '../../../components/layout/Main';
import Content from '../../../components/pages/Users/View';

const View = (): JSX.Element => {
  document.title = 'Atlana: Profile';

  return (
    <Main>
      <Content />
    </Main>
  );
};

export default View;
