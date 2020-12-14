import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logo} alt="Github Explore" />
    <Title>Explore repositórios no Github</Title>
    <Form action="">
      <input placeholder="Digite o repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="/">
        <img
          src="https://cdn.discordapp.com/avatars/626612399318761484/eb14d117157e56c2e9f05ca597be087b.png?size=512"
          alt="renan"
        />
        <div>
          <strong>Renan Lima</strong>
          <p>Description que vai ta no repositório ReactJS, NodeJS.</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="/">
        <img
          src="https://cdn.discordapp.com/avatars/626612399318761484/eb14d117157e56c2e9f05ca597be087b.png?size=512"
          alt="renan"
        />
        <div>
          <strong>Renan Lima</strong>
          <p>Description que vai ta no repositório ReactJS, NodeJS.</p>
        </div>

        <FiChevronRight size={20} />
      </a>
      <a href="/">
        <img
          src="https://cdn.discordapp.com/avatars/626612399318761484/eb14d117157e56c2e9f05ca597be087b.png?size=512"
          alt="renan"
        />
        <div>
          <strong>Renan Lima</strong>
          <p>Description que vai ta no repositório ReactJS, NodeJS.</p>
        </div>

        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
