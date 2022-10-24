import { Box } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { columns } from './columns';
import useFetch from 'use-http';
import { Table } from '../../components';
import { chunk } from 'lodash';
import { internalSearch } from '../../utils';
import AddUser from '../../components/AddUser';

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

        const pageSize = newData.length > 10 ? 10 : newDataLength;
        const totalPages = chunk(newData, pageSize).length;
        const itemsPage = chunk(newData, pageSize);

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
      <AddUser getEmployees={getEmployees} onChangeInput={handleSearch} />
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
