import { Button, Card, Input } from "./components";
import './index.css';
const App = () => (
  <div className="App">
    <Button variant="outlined">Button</Button>
    <Input type="text" placeholder="Input" variant="filled" />
    <Card body="Card body" title="ok" footerItems={[<Button>test</Button>]} />
  </div>
);

export default App;