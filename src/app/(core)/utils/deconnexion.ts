import {sendDelete, useGet} from "@/app/(core)/utils/hooks";
import {API_BASE_URL, API_URL} from "@/app/config";

export function deconnexion() {
    sendDelete(API_BASE_URL+"deconnexion");
    window?.localStorage?.removeItem('token');
    window?.localStorage?.removeItem('utilisateur');
}
