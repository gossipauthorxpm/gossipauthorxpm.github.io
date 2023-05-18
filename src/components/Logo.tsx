import Link from "./Link";
import {ILogoProps} from "../types/types-header";
import {RoutesEndpoints} from "../static/routes-endpoints";
import React from "react";

export default function Logo(props: ILogoProps): React.JSX.Element {
    return <>
        <Link
            href={RoutesEndpoints.ROOT_PAGE}
            className={'btn btn-ghost normal-case text-3xl tracking-widest'}>{props.children}</Link>
    </>
}