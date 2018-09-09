import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";

class LoginForm extends Component {
  state = {
    data: {
      email: "",
      pass_word: ""
    }
    //this.onSubmit=this.onSubmit.bind(this);
  };
  onChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });

  onSubmit = () => {
    this.props.submit(this.state.data);
  };

  render() {
    const { data } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={this.onChange}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor="pass_word">Password</label>
          <input
            type="password"
            id="pass_word"
            name="pass_word"
            placeholder="Make it secure"
            value={data.pass_word}
            onChange={this.onChange}
          />
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    );
  }
}

export default LoginForm;
