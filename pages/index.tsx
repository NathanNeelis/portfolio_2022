import type { NextPage } from 'next'
import styles from '../view/styles/Home.module.css'
import HeadWrapper from '../view/components/headWrapper/HeadWrapper';
import Header from '../view/components/header/Header';
import Introduction from '../view/components/introduction/Introduction';
import Projects from '../view/components/projects/Projects';

const Home: NextPage = () => {
  return (
    <body>
      <HeadWrapper />

      <Header />

      <main>
        <Introduction />
        <Projects />
      </main>

      <footer>

      </footer>
    </body>
  )
}

export default Home
