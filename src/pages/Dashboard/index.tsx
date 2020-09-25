import React, { FormEvent, useCallback, useEffect, useState } from 'react'
import { FiChevronRight, FiLogOut } from 'react-icons/fi'
import { BiTrash } from 'react-icons/bi'
import Modal from '../../components/Modal'
import { useAuth } from '../../hooks/Auth'
import api from '../../services/api'
import githubApi from '../../services/githubApi'

import { Container, Form, Repositories, Error } from './styles'

interface IRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface IResponse {
  id: string
  full_name: string;
  description: string;
  owner_login: string;
  owner_avatar_url: string;

}

const Dashboard: React.FC = () => {
  const { signOut } = useAuth()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [selectedRepository, setSelectedRepository] = useState('')
  const [newRepo, setNewRepo] = useState('')
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<IResponse[]>([] as IResponse[])

  useEffect(() => {
    api.get<IResponse[]>('/repos').then(({ data }) => {
      setRepositories(data)
    }).catch((err) => { alert('Oops! Unexpected error occurred.') })
  }, [])

  const handleAddRepository = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Digite o autor/nome do repositorio');
      return;
    }
    setInputError('');
    try {
      const { data } = await githubApi.get<IRepository>(`repos/${newRepo}`);

      const repository = await api.post<IResponse>('/repos', { description: data.description, full_name: data.full_name, owner_login: data.owner.login, owner_avatar_url: data.owner.avatar_url })


      setRepositories([...repositories, repository.data]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    }
  }, [newRepo, repositories])

  const handleOpenModal = useCallback((repository: string) => {
    setSelectedRepository(repository)
    setModalIsOpen(true)
  }, [])

  const handleDeleteRepository = useCallback(async (id: string) => {
    try {
      await api.delete(`/repos/${id}`)

      setRepositories(repositories.filter(repository => repository.id !== id))
    } catch (err) {
      alert('Something went wrong when deleting this repository.')
    }
  }, [repositories])

  return (
    <Container>
      <div>
        <h1>Adicione seus repositórios favoritos do GitHub</h1>
        <FiLogOut size={24} onClick={signOut} />
      </div>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => {
            setNewRepo(e.target.value);
          }}
          type='text'
          placeholder='Digite aqui: autor/nome_repo'
        />

        <button type='submit'>Pesquisar</button>
      </Form>

      {modalIsOpen && (
        <Modal repositoryName={selectedRepository} modalIsOpen={modalIsOpen} closeModal={() => { setModalIsOpen(false) }} />
      )}

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <>
            <button type="button" key={repository.id}>
              <img
                src={repository.owner_avatar_url}
                alt={repository.owner_login}
              />

              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>

              <FiChevronRight size={24} onClick={() => { handleOpenModal(repository.full_name) }} />
              <BiTrash onClick={() => { handleDeleteRepository(repository.id) }} color="#DB222A" size={20} />
            </button>
          </>
        ))}


      </Repositories>
    </Container>
  )
}

export default Dashboard
