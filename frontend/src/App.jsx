import "./App.css";
import SignupForm from "./InputForm";

function App() {
    return (
        <div className="w-screen h-screen flex">
            <div className="w-1/2 bg-gray-200  p-4"></div>
            <div className="w-1/2 p-4">
                <SignupForm />
            </div>
        </div>
    );
}

export default App;
