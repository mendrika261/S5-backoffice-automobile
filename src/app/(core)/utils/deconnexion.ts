import { useEffect } from 'react';
import { useGet } from "@/app/(core)/utils/hooks";
import { API_URL } from "@/app/config";

export default function DeconnexionComponent() {
    const [data] = useGet(API_URL+"deconnexion");
    window?.localStorage?.removeItem("token");
    useEffect(() => {
        // Effectuez l'action de déconnexion ici en utilisant les données
    }, [data]);

    // Le reste de votre code de composant
}
