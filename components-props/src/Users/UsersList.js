import './UsersList.css';

import users, { subtitle, title } from '../users-list';
import User from './User';

function UsersList() {
    return (
        <div className="UsersList">
            <h2>{title}</h2>
            <h4>{subtitle}</h4>
            <User name={users[0].name} age={users[0].age} job={users[0].job} />
            <User name={users[1].name} age={users[1].age} job={users[1].job} />
            <User name={users[2].name} age={users[2].age} job={users[2].job} />
        </div>
    );
}

export default UsersList;
