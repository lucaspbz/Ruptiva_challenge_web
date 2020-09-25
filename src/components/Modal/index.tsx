import React, { useEffect, useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';

import githubApi from '../../services/githubApi';

import { Container, RepositoryInfo, Issues } from './styles';

interface IModalProps {
  modalIsOpen: boolean
  closeModal(): void
  repositoryName: string
}

interface IRepository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface IIssue {
  html_url: string;
  title: string;
  id: number;
  user: {
    login: string;
  };
}

const Modal: React.FC<IModalProps> = ({ repositoryName, modalIsOpen, closeModal }) => {
  const [repository, setRepository] = useState<IRepository | null>(null)
  const [issues, setIssues] = useState<IIssue[]>([])

  useEffect(() => {

    githubApi.get(`/repos/${repositoryName}`).then((response) => {
      setRepository(response.data);
    });
    githubApi.get(`/repos/${repositoryName}/issues`).then((response) => {
      setIssues(response.data.slice(0, 4));
    });

  }, [repositoryName,]);


  return (
    <Container
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      ariaHideApp={false}
    >
      {repository && (
        <RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository?.full_name}</strong>
              <p>{repository?.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repository?.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository?.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository?.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
      )}

      <Issues>
        {issues.map(issue => (

          <a href={issue.html_url} key={issue.id} target="blank">
            <div>
              <strong>{issue.title}</strong>
              <p>
                {issue.user.login}
              </p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}

      </Issues>
    </Container>
  );
}

export default Modal;
