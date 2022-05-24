import './App.css';
import { ThemeProvider } from "@mui/material/styles";
import PaperBase from "./dashboard/PaperBase";


function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <PaperBase />
      </ThemeProvider>
    </div>
  );
}

export default App;
