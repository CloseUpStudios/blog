import {useState, useEffect} from "react";

const useWindowLocation = () => {
    const [windowLocation, setWindowLocation] = useState("");

    const handleLocationChange = () => {
        setWindowLocation(window.location.pathname);
    }

    useEffect(() => {
        handleLocationChange();
        window.addEventListener("popstate", handleLocationChange);
        return () =>  window.removeEventListener("popstate", handleLocationChange);
    }, []);

    return [windowLocation, setWindowLocation]
}

export default useWindowLocation