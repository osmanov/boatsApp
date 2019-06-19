import { Button } from "antd";
const Dashboard = ({ userEmail, onLogout }) => (
  <>
    <h1>{userEmail}</h1>
    <Button type="primary" onClick={onLogout}>
      Logout
    </Button>
  </>
);

export default Dashboard;
