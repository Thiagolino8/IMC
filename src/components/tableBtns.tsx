import { useState } from 'react'
import { axiosFetcher, fetcher, useStore } from '../stores/store'

export const TableBtns = () => {
	const [Engine, setEngine] = useState(true)
	const { reset } = useStore(state => ({ reset: state.reset }))
	return (
		<div className='flex flex-col gap-3 md:btn-group md:flex-row md:gap-0'>
			<button className='btn btn-primary' onClick={Engine ? fetcher : axiosFetcher}>
				{Engine ? 'Buscar com Fetch' : 'Buscar com Axios'}
			</button>
			<button className='btn btn-primary' onClick={() => setEngine(!Engine)}>
				Mudar Motor
			</button>
			<button className='btn btn-primary' onClick={reset}>
				Resetar
			</button>
		</div>
	)
}
