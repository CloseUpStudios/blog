import Link from 'next/link';
import NoSsr from './NoSsr';

export default function NavbarItem({ name, href = `/${name}`, disabled }) {

    disabled = disabled ? "disabled" : "";

    return (
        <NoSsr>
            <Link href={`${href}`} >
                <a id={`${name}Anchor`} className={`btn btn_primary roboto roboto-bold ${disabled}`}>
                    {name}
                </a>
            </Link>
        </NoSsr>
    )
}