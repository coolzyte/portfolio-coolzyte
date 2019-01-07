import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";

class Index extends React.Component {
  constructor() {
    super();
    this.state = { title: "I am state" };
  }
  upDateState = () => {
    this.setState({ title: "I am an updated state" });
  };
  render() {
    return (
      <div>
        <BaseLayout>
          <h1>I am Index Page</h1>
          <button onClick={this.upDateState}>{this.state.title}</button>
        </BaseLayout>
      </div>
    );
  }
}
export default Index;
