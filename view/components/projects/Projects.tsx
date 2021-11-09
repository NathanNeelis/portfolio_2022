import Project from '../project/Project'

interface Props {
    data: any;
}

export default function Projects(props: Props) {
    const { data } = props;

    return (
        <section>
            <header>
                <h2>Web development projects</h2>
            </header>

            {/* webdev projects  */}
            {data.map(project => (
                <Project data={project} />
            ))}


            {/* ux projects  */}
        </section>
    );
};