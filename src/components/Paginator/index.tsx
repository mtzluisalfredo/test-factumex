import React from 'react';
import { chakra } from '@chakra-ui/react';
import { usePagination, DOTS } from './usePagination';

const UList = chakra('ul', {
  baseStyle: {},
});
const ItemList = chakra('li', {
  baseStyle: {
    marginX: '8px',
  },
});

const Pagination = (props: any) => {
  const { onPageChange, totalItems, siblingCount = 1, page, pageSize } = props;

  const paginationRange: any = usePagination({
    page,
    totalItems,
    siblingCount,
    pageSize,
  });

  // if (page === 0 || paginationRange.length < 2) {
  //   return null;
  // }

  return (
    <UList display='flex' listStyleType='none'>
      {paginationRange?.map((pageNumber: any, index: number) => {
        const selected = pageNumber === page;

        if (pageNumber === DOTS) {
          return <ItemList>&#8230;</ItemList>;
        }

        return (
          <ItemList
            key={index.toString()}
            onClick={() => onPageChange(pageNumber)}
            textDecoration={selected ? 'underline' : 'none'}
          >
            {pageNumber}
          </ItemList>
        );
      })}
    </UList>
  );
};

export default Pagination;
