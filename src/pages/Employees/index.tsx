import { Box, Flex, Input, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { columns } from './columns';
import useFetch from 'use-http';
import { Table } from '../../components';
import { chunk } from 'lodash';
import { internalSearch } from '../../utils';

function ProtectedPage() {
  const { get } = useFetch();

  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [pagination, setPagination] = useState<any>({
    page: 1,
    pageSize: 10,
    totalItems: 1000,
    totalPages: 1,
    itemsPage: [],
  });

  const getEmployees = async () => {
    const response = await get('/examen/employees/luisalfredo');

    if (response && Array.isArray(response?.data?.employees)) {
      const dataTable = response.data.employees;
      setEmployees(dataTable);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  useEffect(() => {
    if (employees.length) {
      const newData = search ? internalSearch(employees, search) : employees;

      setPagination((prev: any) => {
        const newDataLength = newData.length;
        console.log(
          '%c [ newDataLength ]-41',
          'font-size:13px; background:#06EE8D; color:#2f3656;',
          newDataLength,
        );
        const pageSize = newData.length > 10 ? 10 : newDataLength;
        const totalPages = chunk(newData, pageSize).length;
        const itemsPage = chunk(newData, pageSize);

        console.log('itemsPage', itemsPage);
        console.log('totalPages', totalPages);
        console.log('pageSize', pageSize);

        return {
          ...prev,
          page: 1,
          pageSize: pageSize,
          totalPages: totalPages,
          itemsPage: itemsPage,
          totalItems: newData.length,
        };
      });
    }
  }, [employees, search]);

  const handleSearch = (e: any) => {
    setSearch(e?.target?.value);
  };

  return (
    <Box width={{ base: '100%' }}>
      <Flex
        alignItems={{ base: 'center' }}
        marginY={{ base: '40px' }}
        justifyContent={{ base: 'space-between' }}
      >
        <Text fontWeight={{ base: 'bold' }} fontSize={{ base: '40px' }}>
          Tabla de empleados
        </Text>
        <Input onChange={handleSearch} placeholder='Buscar...' maxWidth={{ base: '300px' }} />
      </Flex>
      <Table
        columns={columns}
        pagination={pagination}
        onChangePage={(page: any) =>
          setPagination((e: any) => {
            return {
              ...e,
              page,
            };
          })
        }
      />
    </Box>
  );
}

export default ProtectedPage;
