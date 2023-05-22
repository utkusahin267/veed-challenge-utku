import { act, renderHook, } from '@testing-library/react';
import useRepositoryFavorite, { REPOSITORY_LOCAL_STORAGE_KEY } from './useRepositoryFavorite';

describe('Use repository favorite hook', () => {
  test('renders successfully', () => {
    const { result } = renderHook(useRepositoryFavorite);
    const { toggleFavorite } = result.current;
    act(() => {
      toggleFavorite('test-id');
    })
    const localStorageItems = window.localStorage.getItem(REPOSITORY_LOCAL_STORAGE_KEY) ?? '{}';
    expect(JSON.parse(localStorageItems)).toStrictEqual({ 'test-id': true });
  });
})
