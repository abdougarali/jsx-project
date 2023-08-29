import "./App.css";
import product from "./product";
import Name from "./name";
import Price from "./price";
import Description from "./Description";
import Image from "./img";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const firstName = "abdou";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="card1">
        <Card style={{ width: "18rem" }}>
          <Card.Img className="img" variant="top" src={product.imageurl} />
          <Card.Body>
            <Name productName={product.name} />
            <Price productPrice={product.price} />
            <Description productDescription={product.description} />
          </Card.Body>

          <div className="mt-3">
            <p>Hello, {firstName}!</p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
