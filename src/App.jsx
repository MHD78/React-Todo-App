import { useState } from "react";
import TodoApp from "./components/TodoApp"

const App = (props) => {
    const [theme, setTheme] = useState("bright");
    const userTheme = (preferedTheme) => {
        setTheme(preferedTheme);
        props.html.className = theme;
    }
    return (
        <div>
            <TodoApp userTheme={userTheme} currentTheme={theme} />
        </div>
    );
}

export default App;