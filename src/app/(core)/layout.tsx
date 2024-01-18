import Header from "@/app/(core)/ui/Header";
import Navbar from "@/app/(core)/ui/Navbar";
import Footer from "@/app/(core)/ui/Footer";

export default function AdminLayout({
  children,
}: {
    children: React.ReactNode
}) {

    return (
        <div className="page">
            <Header/>
            <Navbar/>
            <div className="page-wrapper">
                {children}
                <Footer/>
            </div>
        </div>
    )
}
