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

  const res = await client.getEntries({ content_type: "developmentProjects" })

  return {
    props: {
      devProjects: res.items,
    }
  }
}

interface Props {
  data: any;
}


export default function Recipes(devProjects: Props) {
  console.log(devProjects)

  return (
    <body>
      <HeadWrapper />

      <Header />

      <main>
        <Introduction />
        <Projects data={devProjects} />
      </main>

      <footer>

      </footer>
    </body>
  )
}

