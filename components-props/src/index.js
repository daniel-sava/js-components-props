import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import UsersList from './Users/UsersList';
import MatchesList from './WorldCup/MatchesList';
import TeamsList from './WorldCup/TeamsList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <UsersList />
        <MatchesList />
        <TeamsList />
    </React.StrictMode>
);
