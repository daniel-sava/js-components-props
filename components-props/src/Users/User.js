function User(props) {
    return (
        <div className="User">
            <p className="name">
                {props.name} ({props.job})
            </p>
            <p className="birth">
                {props.birth} <span>{props.age}</span>
            </p>
        </div>
    );
}

export default User;
