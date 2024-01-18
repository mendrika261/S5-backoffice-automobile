import dynamic from 'next/dynamic';
import Loading from "@/app/loading";
import {ReactNode} from "react";

function ClientOnly(props: { children: JSX.Element[]|JSX.Element|ReactNode }) {
    const { children } = props;
    return children;
}


export default dynamic(() => Promise.resolve(ClientOnly), {
    ssr: false,
    loading: () => <Loading/>,
});
