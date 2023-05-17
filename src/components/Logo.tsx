import Link from "./Link";
import {ILogoProps} from "../types/types-header";

export default function Logo(props: ILogoProps) {
    return <>
        <Link
            href={''}
            className={'btn btn-ghost normal-case text-4xl'}>{props.children}</Link>
    </>
}