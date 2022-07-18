import '../index.css'

import { useEffect } from 'react'

import { useStore } from '../stores/store'

import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
	const { reset } = useStore((state) => ({ reset: state.reset }))
	useEffect(() => {
		reset()
	}, [])
	return (
		<>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
