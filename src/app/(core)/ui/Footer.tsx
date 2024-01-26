import Link from "next/link";
import {DOCUMENTATION_URL, SOURCE_CODE_URL} from "@/app/config";

export default function Footer() {
    return (
        <footer className="footer footer-transparent d-print-none">
            <div className="container-xl">
                <div className="row text-center align-items-center flex-row-reverse">
                    <div className="col-lg-auto ms-lg-auto">
                        <ul className="list-inline list-inline-dots mb-0">
                            <li className="list-inline-item"><Link href={DOCUMENTATION_URL} target="_blank"
                                                                className="link-secondary"
                                                                rel="noopener">Documentation</Link></li>
                            <li className="list-inline-item"><Link href={SOURCE_CODE_URL}
                                                                target="_blank" className="link-secondary"
                                                                rel="noopener">Code Source</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}