import Link from 'next/link'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

interface Props {
    data: any;
}

export default function Project(props: Props) {
    const { data } = props;
    const { fields } = data;
    const { title, slug, shortDescription, thumbnail, keywordChips } = fields;
    console.log('project props', props)
    return (
        <article className="projectCardWrapper">
            <a href="pages/article-typescript.html">
                {/* <Image
                    src={'https:' + thumbnail.fields.file.url}
                    width={thumbnail.fields.file.details.image.width}
                    height={thumbnail.fields.file.details.image.height}
                /> */}
                <img src={'https:' + thumbnail.fields.file.url} alt="typescript logo" />
                <div className="projectCard"></div>
                <div className="projectCard-text">
                    <h3>{title}</h3>
                    <p>{documentToReactComponents(shortDescription)}</p>
                    <ul className="codeVariations">
                        {keywordChips.map(chip => (
                            <li className="jsChip">{chip}</li>
                        ))}

                    </ul>
                </div>
            </a>
        </article>
    );
};

