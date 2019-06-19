import React from "react";
import Layout from "../components/Layout";
import Dashboard from "../components/Dashboard";
import SignInForm from "../components/SignInForm";

export default class Home extends React.Component {
  componentDidMount() {
    if (!localStorage.getItem("password")) {
      this.removeMemory();
    }
    this.setState({
      isLogged:
        localStorage.getItem("email") && localStorage.getItem("password")
    });
  }
  handleSignInFormSubmit = (err, values) => {
    if (!err) {
      localStorage.setItem("password", values.password);
      localStorage.setItem("email", values.email);
      this.setState({ isLogged: true });
    } else {
      if (!err.email) {
        localStorage.setItem("email", values.email);
      } else {
        localStorage.removeItem("email");
      }
    }
  };
  removeMemory() {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
  }
  handleLogout = () => {
    this.removeMemory();
    this.setState({ isLogged: false });
  };
  render() {
    return (
      <Layout>
        {this.state && this.state.isLogged ? (
          <Dashboard
            onLogout={this.handleLogout}
            userEmail={localStorage.getItem("email")}
          />
        ) : (
          <SignInForm onSubmit={this.handleSignInFormSubmit} />
        )}
      </Layout>
    );
  }
}
