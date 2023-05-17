import Link from "./Link";
import {ILogoProps} from "../types/types-header";
import {RoutesEndpoints} from "../static/RoutesEndpoints";

export default function Logo(props: ILogoProps) {
    return <>
        <Link
            href={RoutesEndpoints.MAIN_PAGE}
            className={'btn btn-ghost normal-case text-4xl'}>{props.children}</Link>
    </>
}