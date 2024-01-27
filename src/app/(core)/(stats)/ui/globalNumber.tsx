export default function GlobalNumber(
    {titre, pourcentage, description, nombre, nombreTotal}:
        {
            titre: string,
            pourcentage: number,
            description: string,
            nombre: string
            nombreTotal: string
        }
) {
    return (
        <div className="col-sm-6 col-lg-3">
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <div className="subheader">{titre}</div>
                    </div>
                    <div className="h1 mb-3">{pourcentage}%</div>
                    <div className="d-flex mb-2">
                        <div>{description}</div>
                        <div className="ms-auto">
                                    <span className="text-cyan d-inline-flex align-items-center lh-1">
                                      {nombre} / {nombreTotal}
                                    </span>
                        </div>
                    </div>
                    <div className="progress progress-sm">
                        <div className="progress-bar bg-primary" style={{width: `${pourcentage}%`}} role="progressbar">
                            <span className="visually-hidden">{pourcentage}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}