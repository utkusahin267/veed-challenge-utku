import { formatDate } from './date';

test('formatDate', () => {
  const testDate = new Date('Sun May 21 2023 21:17:13 GMT+0300 (GMT+03:00)')
  const formattedDate = formatDate(testDate)
  expect(formattedDate).toStrictEqual("2023-05-21");
});
