import Team from './Team';

function Match(props) {
    return (
        <div className="Match">
            <Team name={props.teamOne} />
            -
            <Team name={props.teamTwo} />
        </div>
    );
}

export default Match;
