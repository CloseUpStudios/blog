import Link from 'next/link';

export default function NavbarItme({ name, href = `/${name}`, disabled }) {
    disabled = disabled ? "disabled" : "";
    return(
        <Link href={`${href}`} ><a id={`${name}Anchor`} className={`btn btn_primary roboto roboto-bold ${disabled}`}>{name}</a></Link>
    )
}