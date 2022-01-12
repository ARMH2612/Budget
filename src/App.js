import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./Componenets/BudgetCard";


function App() {
  return (
   <Container className="my-4">
     <Stack direction="horizontal" gap='2' className="mb-4">
      <h1 className='me-auto'>Budget</h1>
      <Button variant="primary">Add Budget</Button>
      <Button variant='outline-primary'>Add Expences</Button>
     </Stack>
     <div style={{
       display: "grid",
       gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",
       gap:"1rem",
       alignItems: "flex-start",
     }}>
       <BudgetCard name="Entertanement" gray amount="2100" max = "2000"></BudgetCard>
     </div>
   </Container>
  );
}

export default App;
