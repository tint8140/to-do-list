import * as React from "react"

const HomePage = () => {
  // return <h1>Home Page</h1>;
  function onButtonClick() {
    console.log('Hi there');
}
  (
    <React.Fragment>
        <h1>Home Page</h1>
        <button>Click Me</button>
    </React.Fragment>
    );
}
export default HomePage;
