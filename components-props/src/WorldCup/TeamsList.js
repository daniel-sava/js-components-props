import Team from './Team';

function TeamsList() {
    return (
        <div className="TeamsList">
            <h2>Lista echipe participante</h2>
            <Team name="Brazilia" />
            <Team name="Spania" />
            <Team name="Maroc" />
            <Team name="Argentina" />
            <Team name="Franta" />
        </div>
    );
}

export default TeamsList;
