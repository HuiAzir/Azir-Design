import React from "react";
import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      <header className="App-header">Azir Design</header>
      <div data-test="btn-test">
        <div>
          <Button size="lg">default(lg)</Button>
          <Button>default</Button>
          <Button size="sm">default(sm)</Button>
          <Button size="sm" disabled>
            default(sm)
          </Button>
        </div>
        <br />
        <div>
          <Button type="primary" size="lg">
            primary(lg)
          </Button>
          <Button type="primary" onClick={() => alert(123)}>
            primary
          </Button>
          <Button type="primary" size="sm">
            primary(sm)
          </Button>
          <Button disabled type="primary" size="sm">
            primary(sm)
          </Button>
        </div>
        <br />
        <div>
          <Button type="danger" size="lg">
            danger(lg)
          </Button>
          <Button type="danger" onClick={() => alert(123)}>
            danger
          </Button>
          <Button type="danger" size="sm">
            danger(sm)
          </Button>
          <Button disabled type="danger" size="sm">
            danger(sm)
          </Button>
        </div>
        <br></br>
        <div>
          <Button href="#" type="link" size="lg">
            link(lg)
          </Button>
          <Button href="#" type="link" onClick={() => alert(123)}>
            link
          </Button>
          <Button href="#" type="link" size="sm">
            link(sm)
          </Button>
          <Button href="#" disabled type="link" size="sm">
            link(sm)
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
