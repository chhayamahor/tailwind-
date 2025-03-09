import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("About constructor");
  }

  componentDidMount() {
    console.log("Parent component Did Mount");
  }

  render() {
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass
          name={"Chhaya Mahor (Class)"}
          location={"New Delhi sector 59"}
          contact={"@chhayamarch77777"}
        />
        <UserClass
          name={"Elon Musk"}
          location={"USA"}
          contact={"@elonmusk77777"}
        />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <h2>This is Namaste React</h2>
//       {/* <User name={"Chhaya Mahor (functional)"} />  */}

//       <UserClass
//         name={"Chhaya Mahor (Class)"}
//         location={"New Delhi sector 59"}
//         contact={"@chhayamarch77777"}
//       />
//     </div>
//   );
// };
export default About;
