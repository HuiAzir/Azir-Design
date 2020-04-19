import React from 'react';
import Alert from './alert';

const Title1 = () => <p>ReactNode Title</p>;
class Title2 extends React.Component {
  render() {
    return <p>ReactNode Title2</p>;
  }
}
function App() {
  return (
    <div data-test="alert-test" style={{ padding: 10 }}>
      <Alert
        className="alerts"
        style={{ marginBottom: 10 }}
        type="success"
        message="message"
        title={<Title1 />}
      />
      <Alert
        className="alerts"
        type="success"
        message="message"
        style={{ marginBottom: 10 }}
        title={<Title2 />}
      />
      <Alert
        style={{ marginBottom: 10 }}
        className="alerts"
        type="success"
        message="message"
        title="String Title"
      />
      <Alert
        style={{ marginBottom: 10 }}
        className="alerts"
        type="info"
        message="message"
        title="String Title"
      />
      <Alert
        style={{ marginBottom: 10 }}
        className="alerts"
        type="warning"
        message="message"
        title="String Title"
      />
      <Alert
        style={{ marginBottom: 10 }}
        className="alerts"
        type="error"
        message="message"
        title="String Title"
      />
    </div>
  );
}

export default App;
