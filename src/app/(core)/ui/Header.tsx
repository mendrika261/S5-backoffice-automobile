import Image from "next/image";

export default function Header() {
    return (
        <header className="navbar navbar-expand-md d-print-none">
            <div className="container-xl">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                    <a href=".">
                        <Image src="/static/logo.svg" width="110" height="32" alt="Tabler"
                               className="navbar-brand-image"/>
                    </a>
                </h1>
                <div className="navbar-nav flex-row order-md-last">
                    <div className="d-none d-md-flex">
                        <a href="?theme=dark" className="nav-link px-0 hide-theme-dark" title="Enable dark mode"
                           data-bs-toggle="tooltip"
                           data-bs-placement="bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                 viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path
                                    d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>
                            </svg>
                        </a>
                        <a href="?theme=light" className="nav-link px-0 hide-theme-light" title="Enable light mode"
                           data-bs-toggle="tooltip"
                           data-bs-placement="bottom">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                 viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
                                <path
                                    d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>
                            </svg>
                        </a>
                        <div className="nav-item dropdown d-none d-md-flex me-3">
                            <a href="#" className="nav-link px-0" data-bs-toggle="dropdown" tabIndex={-1}
                               aria-label="Show notifications">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24"
                                     viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                     strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path
                                        d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/>
                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
                                </svg>
                                <span className="badge bg-red"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-end dropdown-menu-card">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Last updates</h3>
                                    </div>
                                    <div className="list-group list-group-flush list-group-hoverable">
                                        <div className="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="col-auto"><span
                                                    className="status-dot status-dot-animated bg-red d-block"></span>
                                                </div>
                                                <div className="col text-truncate">
                                                    <a href="#" className="text-body d-block">Example 1</a>
                                                    <div className="d-block text-muted text-truncate mt-n1">
                                                        Change deprecated html tags to text decoration classes
                                                        (#29604)
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <a href="#" className="list-group-item-actions">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="icon text-muted" width="24" height="24"
                                                             viewBox="0 0 24 24" strokeWidth="2"
                                                             stroke="currentColor" fill="none" strokeLinecap="round"
                                                             strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path
                                                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="col-auto"><span className="status-dot d-block"></span>
                                                </div>
                                                <div className="col text-truncate">
                                                    <a href="#" className="text-body d-block">Example 2</a>
                                                    <div className="d-block text-muted text-truncate mt-n1">
                                                        justify-content:between ⇒ justify-content:space-between
                                                        (#29734)
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <a href="#" className="list-group-item-actions show">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="icon text-yellow" width="24" height="24"
                                                             viewBox="0 0 24 24" strokeWidth="2"
                                                             stroke="currentColor" fill="none" strokeLinecap="round"
                                                             strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path
                                                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="col-auto"><span className="status-dot d-block"></span>
                                                </div>
                                                <div className="col text-truncate">
                                                    <a href="#" className="text-body d-block">Example 3</a>
                                                    <div className="d-block text-muted text-truncate mt-n1">
                                                        Update change-version.js (#29736)
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <a href="#" className="list-group-item-actions">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="icon text-muted" width="24" height="24"
                                                             viewBox="0 0 24 24" strokeWidth="2"
                                                             stroke="currentColor" fill="none" strokeLinecap="round"
                                                             strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path
                                                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item">
                                            <div className="row align-items-center">
                                                <div className="col-auto"><span
                                                    className="status-dot status-dot-animated bg-green d-block"></span>
                                                </div>
                                                <div className="col text-truncate">
                                                    <a href="#" className="text-body d-block">Example 4</a>
                                                    <div className="d-block text-muted text-truncate mt-n1">
                                                        Regenerate package-lock.json (#29730)
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <a href="#" className="list-group-item-actions">
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             className="icon text-muted" width="24" height="24"
                                                             viewBox="0 0 24 24" strokeWidth="2"
                                                             stroke="currentColor" fill="none" strokeLinecap="round"
                                                             strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                            <path
                                                                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown"
                           aria-label="Open user menu">
                                  <span className="avatar avatar-sm"
                                        style={{backgroundImage: `url(/static/avatars/me.jpg)`}}></span>
                            <div className="d-none d-xl-block ps-2">
                                <div>mendrika261</div>
                                <div className="mt-1 small text-muted">Admin</div>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                            <a href="#" className="dropdown-item">Status</a>
                            <a href="" className="dropdown-item">Profile</a>
                            <a href="#" className="dropdown-item">Feedback</a>
                            <div className="dropdown-divider"></div>
                            <a href="" className="dropdown-item">Settings</a>
                            <a href="" className="dropdown-item">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}