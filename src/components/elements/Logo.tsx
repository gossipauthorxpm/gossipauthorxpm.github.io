import Link from "./Link";
import {ILogoProps} from "../../types/types-header";
import {RoutesEndpoints} from "../../static/routes-endpoints";
import React from "react";

export default function Logo(props: ILogoProps): React.JSX.Element {
    return <>
        <Link
            href={RoutesEndpoints.ROOT_PAGE}
            className={'btn text-2xl btn-ghost normal-case tracking-widest xl:text-3xl'}>{props.children}</Link>
    </>
}