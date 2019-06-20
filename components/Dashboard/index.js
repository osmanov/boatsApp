import { Button } from "antd";
import { Alert } from "antd";
import { StyledWrapperFullWidth } from "../Layout/style";

const Dashboard = ({ userEmail, onLogout }) => (
  <StyledWrapperFullWidth>
    <Alert
      message={userEmail}
      description={
        <Button type="primary" onClick={onLogout}>
          Logout
        </Button>
      }
      type="success"
    />
  </StyledWrapperFullWidth>
);

export default Dashboard;
