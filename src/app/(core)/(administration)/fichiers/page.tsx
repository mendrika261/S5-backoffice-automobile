'use client'
import FaIcon from "@/app/(core)/ui/FaIcon";
import {faList, faSave} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {getDownloadURL,ref} from "firebase/storage"
import {sendPost, upload_photo} from "@/app/(core)/utils/hooks";
import {API_URL} from "@/app/config";
import {uuidv4} from "@firebase/util";
import {storage} from "@/app/(core)/utils/storage";

export default function Fichiers()
{
    const [file, setFile] = useState<File | null>(null);
    const [data, setData] = useState({
        etat: 0,
        nomAvecChemin: '',
        type: 'image',
    });
    const [url,setUrl]=useState('')
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
            setData({...data, nomAvecChemin: `tests/${file?.name}`})
        }
    };
    async function submit(object: any) {
        object.preventDefault();
        const submitButton = document.getElementById('submit') as HTMLButtonElement;

        submitButton.classList.add("btn-loading");
        if(file!=null)
        {
            setData({...data, nomAvecChemin: `tests/${uuidv4()}`})
            await upload_photo({file: file, nom: data.nomAvecChemin});
            await sendPost(API_URL + 'fichiers', data);
            const storageRef = ref(storage, data.nomAvecChemin);
            setUrl(await getDownloadURL(storageRef))
        }
        submitButton.classList.remove("btn-loading");``
    }
    return <>
        <div className="page-header d-print-none">
            <div className="container-xl">
                <div className="row g-2 align-items-center">
                    <div className="col">
                        <h2 className="page-title">
                            Ajouter un fichier
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="page-body">
            <div className="container-xl">
                <form className="card" id="form" onSubmit={submit}>
                    <div className="card-body overflow-hidden">
                        <div className="mb-3">
                            <label className="form-label">Fichier</label>
                            <input type="file" className="form-control"
                                   onChange={handleFileChange}
                            />
                        </div>
                    </div>
                    <div className="card-footer d-flex justify-content-end">
                        <button type="submit" className="btn btn-success" id="submit">
                            Enregistrer <FaIcon icon={faSave}/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>;
}