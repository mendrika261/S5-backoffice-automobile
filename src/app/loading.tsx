import Image from "next/image";

export default function Loading() {
    return (
        <div className="page page-center" id="loader-div">
            <div className="container container-slim py-4">
                <div className="text-center">
                    <div className="mb-3">
                        <a href="." className="navbar-brand navbar-brand-autodark">
                            <Image src="/static/logo-small.svg" height="36" width="36" alt="" />
                        </a>
                    </div>
                    <div className="text-secondary mb-3">Un instant... 😋</div>
                    <div className="progress progress-sm">
                        <div className="progress-bar progress-bar-indeterminate"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}