import Link from "./Link";
import {ILogoProps} from "../types/types-header";
import {RoutesEndpoints} from "../static/RoutesEndpoints";
import React from "react";

export default function Logo(props: ILogoProps): React.JSX.Element {
    return <>
        <Link
            href={RoutesEndpoints.ROOT_PAGE}
            className={'btn btn-ghost normal-case text-4xl tracking-widest'}>{props.children}</Link>
    </>
}