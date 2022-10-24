import { useState } from 'react';
import { chakra, Flex, Text } from '@chakra-ui/react';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from '@hassanmojab/react-modern-calendar-datepicker';
import moment from 'moment';

const Calendar = chakra('input', {
  baseStyle: {
    border: '1px solid',
    width: '100%',
    paddingX: '1rem',
    height: '2.5rem',
    borderRadius: '0.375rem',
  },
});

const InputCalendar = ({ label, placeholder, onChange }: any) => {
  const [selectedDay, setSelectedDay] = useState<any>();

  const { year, month, day } = selectedDay || {};

  const renderCustomInput = ({ ref }: any) => (
    <Calendar
      readOnly
      ref={ref} // necessary
      placeholder={placeholder}
      value={
        selectedDay
          ? `${moment(`${year}/${month}/${day}`, 'YYYY/MM/YY').format('DD/MMMM/YYYY')}`
          : ''
      }
    />
  );

  return (
    <Flex flexDirection={{ base: 'column' }} width={{ base: '100%' }}>
      <Text>{label}</Text>
      <DatePicker
        value={selectedDay}
        onChange={async (value) => {
          const valueString = `${moment(
            `${value?.year}/${value?.month}/${value?.day}`,
            'YYYY/MM/YY',
          ).format('YYYY/MM/DD')}`;
          await setSelectedDay(value);
          await onChange(valueString);
        }}
        renderInput={renderCustomInput} // render a custom input
        shouldHighlightWeekends
      />
    </Flex>
  );
};

export default InputCalendar;
