import { useEffect, useState } from "react";

export function useUIControls(){
    const [uiControls, setUiControls] = useState<HTMLElement | null>(null);

    useEffect(() => {
        const el = typeof document !== "undefined"?document.getElementById("UI-controls"):null;
        setUiControls(el);
    }, []);

    return uiControls;
}