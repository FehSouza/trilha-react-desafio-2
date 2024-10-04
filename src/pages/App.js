import { useState } from 'react'
import gitLogo from '../assets/github.png'
import Button from '../components/Button'
import Input from '../components/Input'
import ItemRepo from '../components/ItemRepo'
import { api } from '../services/api'

import { Container } from './styles'

function App() {
  const [currentRepo, setCurrentRepo] = useState('')
  const [repos, setRepos] = useState([])

  const handleSearchRepo = async () => {
    if (!currentRepo) return alert('Digite um repositório...')

    const { data } = await api.get(`repos/${currentRepo}`)
    if (!data?.id) return alert('Repositório não encontrado...')

    const isExist = repos.find((repo) => repo.id === data.id)
    if (isExist) return

    setRepos((prev) => [data, ...prev])
    setCurrentRepo('')
  }

  const handleRemoveRepo = (id) => {
    const newRepos = repos.filter((repo) => repo.id !== id)
    setRepos(newRepos)
  }

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo" />
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo} />

      {repos.map((repo, i) => (
        <ItemRepo key={`repo-${i}`} handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>
  )
}

export default App
