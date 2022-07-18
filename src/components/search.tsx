import shallow from 'zustand/shallow'
import { useStore } from '../stores/store'

export const Search = () => {
	const { filter, setFilter } = useStore(state => ({ filter: state.filter, setFilter: state.setFilter }), shallow)
	return (
		<input
			className='w-full m-3 input input-bordered input-primary'
			value={filter}
			type='text'
			placeholder='Busque aqui'
			onChange={(e) => setFilter(e.currentTarget.value)}
		/>
	)
}
