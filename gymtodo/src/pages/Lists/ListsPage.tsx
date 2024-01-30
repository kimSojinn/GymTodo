import styled from 'styled-components';
import { Navbar } from '../../components/common/Layout/Navbar';
import { Lists } from '../../components/Lists/Lists';

export const ListsPage = () => {
  return (
    <SListspage>
      <Navbar />
      <Lists />
    </SListspage>
  );
};

const SListspage = styled.div`
  display: flex;
  justify-content: center;
`;
