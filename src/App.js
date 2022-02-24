
import { Container } from "./components/Container";
import { library } from "@fortawesome/fontawesome-svg-core"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

library.add(faEye, faEyeSlash)

function App() {
  return (

    <Container/>

  );
}

export default App;
