import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Project from '../project/Project';

interface Props {
    data: any;
}

export default function Introduction(props:Props) {
    const { data } = props;
    const { fields } = data[0];
    const { title, introduction } = fields;
    
    const RICHTEXT_OPTIONS = {
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                return <p>{children}</p>
            },
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
                console.log('asset block', node)
                return <img src={node.data.target.fields.file.url} alt="" />
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
                console.log('entry', node)
                // return <p>world</p>
                return <div className="entry"><Project data={node.data.target} /></div>
            },
        }
    };

    console.log('incoming intro data', data)
    
    return (
        <section>
            <div>
                <article>
                    {/* <h2>Let me introduce myself...</h2>
                    <p>
                        Hello <span>👋</span> my name is Nathan. I’m learning to be a web
                        developer and user experience designer at the university of
                        applied sciences. My home studio is based in Alkmaar, here I spend
                        most of my hours studying. A few years ago I decided to quit my
                        graphical design job and start learning about the digital world.
                        Nowadays I can create applications and look at the user needs.
                    </p> */}
                    <h2>{title}</h2>
                   
                    {documentToReactComponents(introduction, RICHTEXT_OPTIONS)}
                   
                </article>

                <article>
                    <img src="images/nathan.png" alt="Photo Nathan" />
                </article>
            </div>
        </section>
    );
};