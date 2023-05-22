import { renderHook } from '@testing-library/react';
import useFetch from './useFetch';

describe('UseFetch hook', () => {
  test('no url', () => {
    const { result } = renderHook(() => useFetch());
    expect(result.current).toStrictEqual({
      error: undefined,
      data: undefined,
      loading: undefined,
    });
  });
})
