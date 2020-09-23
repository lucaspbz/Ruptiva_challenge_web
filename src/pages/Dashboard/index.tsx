import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import { Container, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <div>
        <h1>Adicione seus repositórios favoritos do GitHub</h1>
      </div>

      <Form>
        <input type='text' placeholder='Digite aqui' />

        <button type='submit'>Pesquisar</button>
      </Form>

      <Repositories>
        <a>
          <img
            src='https://avatars0.githubusercontent.com/u/59059141?s=460&u=8f3d3703ef24b4436288f77adedf3408ffc56852&v=4'
            alt='avatar'
          />

          <div>
            <strong>lucas/repo</strong>
            <p>Descrição do repo </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a>
          <img
            src='https://avatars0.githubusercontent.com/u/59059141?s=460&u=8f3d3703ef24b4436288f77adedf3408ffc56852&v=4'
            alt='avatar'
          />

          <div>
            <strong>lucas/repo</strong>
            <p>Descrição do repo</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </Container>
  )
}

export default Dashboard
