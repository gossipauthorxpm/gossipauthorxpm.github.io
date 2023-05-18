import React from "react";
import Link from "./Link";
import Image from "./Image";
import {IFooterImageProps} from "../../types/common";
import {motion} from "framer-motion";

export default function FooterLogo(props: IFooterImageProps): React.JSX.Element {
    return <>
        <motion.div
            transition={{type: "just"}}
            whileHover={{scale: 1.7}}>
            <Link href={props.href}>
                <Image useNegative={true} className={'w-8 h-8'} alt={'logo-footer'} src={props.src}/>
            </Link>
        </motion.div>
    </>
}