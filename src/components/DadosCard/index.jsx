import Card from "react-bootstrap/Card";

export default function DadosCard(props) {
  return (
    <Card bg={"light"} key={"light"}>
      <Card.Body>
        <Card.Title>{props.cardTitle}</Card.Title>
        <Card.Text>{props.cardText}</Card.Text>
        {props.cardBody}
      </Card.Body>
    </Card>
  );
}
