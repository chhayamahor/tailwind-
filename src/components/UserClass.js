import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };
    // console.log(this.props.name + "Child constructor");
  }

  componentDidMount() {
    //console.log(this.props.name + "child component Did Mount");
  }

  componentDidUpdate() {
    //console.log(this.props.name + "child component Did Update");
  }
  componentWillUnmount() {
    //console.log(this.props.name + "child component Will Unmount");
  }
  render() {
    const { name, location, contact } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact} </h4>
      </div>
    );
  }
}
export default UserClass;
