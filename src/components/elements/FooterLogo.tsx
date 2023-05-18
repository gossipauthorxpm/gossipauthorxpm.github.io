import React from "react";
import Link from "./Link";
import Image from "./Image";
import {IFooterImageProps} from "../../types/common";
import {motion} from "framer-motion";
import Container from "./Container";

export default function FooterLogo(props: IFooterImageProps): React.JSX.Element {
    return <>
        <motion.div
            transition={{type: "just"}}
            whileHover={{scale: 1.7}}>
            <Link href={props.href}>
                <Container className={'w-8 h-8'}>
                    <Image useNegative={true} alt={'logo-footer'} src={props.src}/>
                </Container>
            </Link>
        </motion.div>
    </>
}