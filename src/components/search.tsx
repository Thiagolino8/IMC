import { useStore } from "../stores/store"
import { Input } from "../styles/input"

export const Search = () => {
  const {filter, setFilter} = useStore()
  return (
    <Input value={filter} type='text' placeholder="Busque aqui" onChange={(e) => setFilter(e.target.value)}/>
  )
}