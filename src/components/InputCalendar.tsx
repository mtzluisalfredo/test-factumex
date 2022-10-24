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

const InputCalendar = ({ label }: any) => {
  const [selectedDay, setSelectedDay] = useState<any>(null);

  const { year, month, day } = selectedDay || {};
  console.log('%c [ year ]-11', 'font-size:13px; background:#06EE8D; color:#2f3656;', year);

  // render regular HTML input element
  const renderCustomInput = ({ ref }: any) => (
    <Calendar
      readOnly
      ref={ref} // necessary
      placeholder="I'm a custom input"
      value={
        selectedDay
          ? `${moment(`${year}/${month}/${day}`, 'YYYY/MM/YY').format('DD/MMMM/YYYY')}`
          : ''
      }
      className='my-custom-input-class' // a styling class
    />
  );

  return (
    <Flex flexDirection={{ base: 'column' }} width={{ base: '100%' }}>
      <Text>{label}</Text>
      <DatePicker
        value={selectedDay}
        onChange={setSelectedDay}
        renderInput={renderCustomInput} // render a custom input
        shouldHighlightWeekends
      />
    </Flex>
  );
};

export default InputCalendar;
