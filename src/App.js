import Form from "./Form";
import Copyright from "./Copyright";
function App() {
  return (
    <section id="form-section">
      <div className="container">
        <div className="form-container">
          <h1>Contact Us</h1>
          <Form></Form>
        </div>
        <Copyright></Copyright>
      </div>
    </section>
  );
}

export default App;
