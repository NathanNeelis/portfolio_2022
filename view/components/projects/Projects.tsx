import Project from '../project/Project'

interface Props {
    data: any;
}

export default function Projects(props: Props) {
    const { data } = props;
    const { devProjects } = data;

    return (
        <section>
            <header>
                <h2>Web development projects</h2>
            </header>

            {/* webdev projects  */}
            {devProjects.map(project => (
                <Project data={project} />
                // <div key={project.sys.id}>{project.fields.title}</div>
            ))}


            {/* ux projects  */}
        </section>
    );
};