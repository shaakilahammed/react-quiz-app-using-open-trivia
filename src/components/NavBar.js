import { useSelector } from 'react-redux';
const NavBar = () => {
  const username = useSelector((state) => state.userInfo.username);
  return <div>Hello {username}</div>;
};

export default NavBar;
