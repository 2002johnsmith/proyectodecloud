import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Unity, useUnityContext } from "react-unity-webgl";

function Game1() {
    //const navigate = useNavigate();

    // Unity context setup
    const { unityProvider, sendMessage } = useUnityContext({
        loaderUrl: "/Bolos/FNAF_bolos.loader.js",
        dataUrl: "/Bolos/FNAF_bolos.data.br",
        frameworkUrl: "/Bolos/FNAF_bolos.framework.js.br",
        codeUrl: "/Bolos/FNAF_bolos.wasm.br",
    });



    return (
        <>
            <div className="centered-container">
                <div className="centered-content">
                    <h1 className="centered-title">React + Unity / Tecsup</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />

                  
                </div>
            </div>
        </>
    );
}

export default Game1;
