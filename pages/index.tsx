import type { NextPage } from 'next'
import styles from '../view/styles/Home.module.css'
import HeadWrapper from '../view/components/headWrapper/HeadWrapper';
import Header from '../view/components/header/Header';
import Introduction from '../view/components/introduction/Introduction';
import Projects from '../view/components/projects/Projects';
import { createClient } from 'contentful';

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCES_TOKEN,
  })

  const projects = await client.getEntries({ content_type: "developmentProjects" })
  const intro = await client.getEntries({ content_type: "introduction" })

  return {
    props: {
      devProjects: projects.items,
      introduction: intro.items,
    }
  }
}

interface Props {
  devProjects: any;
  introduction: any;
}


export default function Recipes(props: Props) {
  
  const {devProjects, introduction} = props;
  console.log('introduction', introduction)
  console.log('projects', devProjects)
  return (
    <body>
      <HeadWrapper />

      <Header />

      <main>
        <Introduction data={introduction} />
        <Projects data={devProjects} />
      </main>

      <footer>

      </footer>
    </body>
  )
}

