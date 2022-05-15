import Link from 'next/link';
import NoSsr from './NoSsr';
import Ripples from "react-ripples";

export default function NavbarItem({ name, href = `/${name}`, disabled, onclick }) {

    disabled = disabled ? "disabled" : "";

    return (
        <NoSsr>
            <Ripples>
                <Link href={`${href}`} >
                    <a onClick={onclick} id={`${name}Anchor`} className={`btn btn_primary roboto roboto-bold ${disabled}`}>
                        {name}
                    </a>
                </Link>
            </Ripples>
    
        </NoSsr>
    )
}