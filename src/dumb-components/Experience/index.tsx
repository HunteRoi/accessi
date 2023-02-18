type Props = {
    component: React.ReactNode
}

const Experience: React.FC<Props> = ({ component }) => {
    return <>
        <h1>Experience works</h1>
        {component}
    </>;
}

export default Experience;
