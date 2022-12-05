import Match from './Match';

function MatchesList() {
    return (
        <div className="MatchesList">
            <h2>Optimi de finala</h2>
            <Match teamOne="Brazilia" teamTwo="Coreea de Sud" />
            <Match teamOne="Maroc" teamTwo="Spania" />
            <Match teamOne="Argentina" teamTwo="Australia" />
            <Match teamOne="Franta" teamTwo="Polonia" />
            <Match teamOne="Japonia" teamTwo="Croatia" />
        </div>
    );
}

export default MatchesList;
