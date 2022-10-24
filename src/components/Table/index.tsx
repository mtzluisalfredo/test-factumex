import { Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import Paginator from '../Paginator';

function TableIndex(props: any) {
  const { columns, pagination, onChangePage } = props;
  console.log(
    '%c [ pagination ]-6',
    'font-size:13px; background:#06EE8D; color:#2f3656;',
    pagination.itemsPage[pagination.page],
  );
  return (
    <TableContainer>
      <Table variant='striped' colorScheme='teal'>
        <Thead>
          <Tr>
            {columns.map(({ title }: any) => {
              return <Th>{title}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {!!pagination.itemsPage.length &&
            (pagination.itemsPage[pagination.page - 1] || []).map((element: any) => {
              return (
                <Tr>
                  {columns.map(({ key, custom = null }: any) => {
                    if (custom) {
                      // @ts-ignore
                      return <Td>{custom(element)}</Td>;
                    }
                    return <Td>{element[key]}</Td>;
                  })}
                </Tr>
              );
            })}
        </Tbody>
      </Table>
      <Flex marginY={{ base: '24px' }} justifyContent={{ base: 'center' }}>
        <Paginator
          page={pagination.page}
          totalItems={pagination.totalItems}
          pageSize={pagination.pageSize}
          onPageChange={onChangePage}
        />
      </Flex>
    </TableContainer>
  );
}

export default TableIndex;
