import "./App.css";
import SignupForm from "./InputForm";
import Logo from "../src/assets/mesh.svg";

function App() {
    return (
        <div className="w-screen h-screen flex">
            <div className="w-1/2 bg-gray-200 p-4 flex items-center justify-center">
                <img src={Logo} alt="Logo" className="w-40 h-auto" />
            </div>
            <div className="w-1/2 p-4">
                <SignupForm />
            </div>
        </div>
    );
}

export default App;
