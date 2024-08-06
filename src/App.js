import { useState } from "react";
import Form from "./components/Form";
import FormSuccess from "./components/FormSuccess";
import Copyright from "./components/Copyright";
function App() {
  const [success, setFormSuccess] = useState(false);
  return (
    <section id="form-section">
      <div className="container">
        <FormSuccess success={success}></FormSuccess>
        <div className="form-container">
          <h1>Contact Us</h1>
          <Form setFormSuccess={setFormSuccess}></Form>
        </div>
        <Copyright></Copyright>
      </div>
    </section>
  );
}

export default App;
