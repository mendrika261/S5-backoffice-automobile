import FaIcon from "@/app/(core)/ui/FaIcon";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export default function ConfirmationModal(
    {id, title, type, message, icon, action, actionButton="Confirmer"}:
    {id: string, title: string, message: string, type: string, icon: IconDefinition, action: any, actionButton: string}
) {
    async function todo() {
        const button = document.getElementById(`delete-${id}`) as HTMLButtonElement;
        button.classList.add("btn-loading");
        await action();
        button.classList.remove("btn-loading");
    }

    return (
        <div className="modal" id={id} tabIndex={-1} style={{top: "100px"}}>
            <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div className="modal-status bg-danger"></div>
                    <div className="modal-body text-center py-4">
                        <FaIcon icon={icon} className={`icon mb-2 text-${type} icon-lg`} />
                        <h3>{title}</h3>
                        <div className="text-secondary">{message}</div>
                    </div>
                    <div className="modal-footer">
                        <div className="w-100">
                            <div className="row">
                                <div className="col"><a href="#" className="btn w-100" data-bs-dismiss="modal">
                                    Annuler
                                </a></div>
                                <div className="col"><button className={`btn btn-${type} w-100`}
                                onClick={todo} id={`delete-${id}`}>
                                    {actionButton}
                                </button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}