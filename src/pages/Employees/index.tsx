import {
  Box,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { columns } from './columns';
import useFetch from 'use-http';

function ProtectedPage() {
  const { get } = useFetch();
  const [employees, setEmployees] = useState([]);

  const getEmployees = async () => {
    const response = await get('/examen/employees/luisalfredo');

    if (response && Array.isArray(response?.data?.employees)) {
      setEmployees(response.data.employees);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <Box width={{ base: '100%' }}>
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              {columns.map(({ title }) => {
                return <Th>{title}</Th>;
              })}
            </Tr>
          </Thead>
          <Tbody>
            {employees.map((element) => {
              return (
                <Tr>
                  {columns.map(({ key, custom = null }) => {
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
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ProtectedPage;
