import Form from "react-bootstrap/Form";

function Switch() {
  return (
    <Form>
      <Form.Check type="switch" id="custom-switch" label="Simulation" />
    </Form>
  );
}

export default Switch;
