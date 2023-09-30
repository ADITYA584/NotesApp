// import 'bootstrap/dist/css/bootstrap.min.css'; 
import {NameInitialsAvatar} from 'react-name-initials-avatar';

function UserProfile(props) {

  return (
    <div className="user-profile">
      <NameInitialsAvatar
        name={props.username}
        bgColor={props.bgColor}
        textColor={props.textColor}
        borderColor={props.borderColor}
      />
      <p>{props.username}</p>
    </div>
  );
}

export default UserProfile;