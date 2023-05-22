import { getLanguagesUsedFromRepositories } from './utils';
import repositories from '../mock-data/repositories';

test('renders learn react link', () => {
  const mockLanguages = getLanguagesUsedFromRepositories(repositories)
  expect(Array.from(mockLanguages)).toStrictEqual(["HTML", "Python", "Java"]);
});
