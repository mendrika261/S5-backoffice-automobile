import Link from "next/link";

export default function NotFound() {
    return (
        <div className="border-top-wide border-primary d-flex flex-column">
            <div className="page page-center mt-8">
                <div className="container-tight py-4">
                    <div className="empty">
                        <div className="empty-header">404</div>
                        <p className="empty-title">Oops… La page n&apos;existe pas</p>
                        <p className="empty-subtitle text-secondary">
                            Nous sommes désolés mais la page que vous recherchez n&apos;a pas été trouvée
                        </p>
                        <div className="empty-action">
                            <Link href="/" className="btn btn-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                     viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M5 12l14 0"/>
                                    <path d="M5 12l6 6"/>
                                    <path d="M5 12l6 -6"/>
                                </svg>
                                Retourner à l&apos;accueil
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
