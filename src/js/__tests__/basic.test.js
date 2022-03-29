/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
import gameSavingLoader from '../app.js';

test('the data is peanut butter', async () => {
  const data = await gameSavingLoader();
  expect(data).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  });
});
