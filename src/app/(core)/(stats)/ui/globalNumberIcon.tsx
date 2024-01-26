import FaIcon from "@/app/(core)/ui/FaIcon";

export default function GlobalNumberIcon(
    {titre, description, icon, color}:
        {
            titre: string,
            description: string,
            icon: any,
            color: string
        }
) {
    return (
        <div className="col-sm-6 col-lg-3">
            <div className="card card-sm">
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <span className={`bg-${color} text-white avatar`}>
                                <FaIcon icon={icon}/>
                            </span>
                        </div>
                        <div className="col">
                            <div className="font-weight-medium">
                                {titre}
                            </div>
                            <div className="text-muted">
                                {description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}