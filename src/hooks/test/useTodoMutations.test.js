import { renderHook } from '@testing-library/react-hooks'
import { useGetTodos } from '../../hooks/useTodoMutations'
import { wrapper } from '../../utils/testUtils'

const mowTheLawn = {
  checked: true,
  createdAt: 1619894090832,
  text: 'Mow the lawn',
  id: 'ea153500-aaab-11eb-b26d-e31f7e2a7914',
  updatedAt: 1619902090237,
}

test('useGetTodos returns data', async () => {
  const { result, waitFor } = renderHook(() => useGetTodos(), {
    wrapper,
  })

  await waitFor(() => result.current.isSuccess)
  expect(result.current.data.length).toBeGreaterThan(0)
  expect(result.current.data[0]).toHaveProperty('id')
})
