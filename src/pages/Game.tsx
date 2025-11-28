//import { useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game() {
    //const navigate = useNavigate();

    // Unity context setup
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Cartas/Cartas.loader.js",
        dataUrl: "/Cartas/Cartas.data.br",
        frameworkUrl: "/Cartas/Cartas.framework.js.br",
        codeUrl: "/Cartas/Cartas.wasm.br",
    });

    // Check if user is logged in
    /* useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            alert("You must be logged in to play.");
            navigate("/login");
        }
    }, [navigate]); */

    function handleClickSpawnEnemies() {
        sendMessage("GameObject", "SpawnEnemies");
    }

    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                    <div className="centered-content">
                        <button onClick={handleClickSpawnEnemies}>Spawn Enemies</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Game;
