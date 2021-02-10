import { Image } from "react-bootstrap";

const ProfileIcon = (props) => {
  return (
    <div style={{ display: "contents" }}>
      <Image src={props.avatar} roundedCircle className="w-50" />
    </div>
  );
};

export default ProfileIcon;
