import { Navigation } from "./components/Navigation/navigation"
import "./App.css"
import { Contactheader } from "./components/ContactHeader/contactheader"
import { ContactForm } from "./components/ContactForm/ContactForm"

function App() {

  return (
    <div>
      <Navigation/>
      <main className="mainContainer">
        <Contactheader/>
        <ContactForm/>
      </main>
    </div>
  )
}

export default App
