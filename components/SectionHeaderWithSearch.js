import SearchBar from "./SearchBar";
import SectionStyles from "../styles/sectionHeader.module.css"

export default function SectionHeaderWithSearch({ title, withSearch=false, onSearchSubmit=()=>{}, clearResults=()=>{} }) {
    return (
        <div id="section_header" className={SectionStyles.sectionHeader}>
            <h2 className="smallHeader lightestOrange">{title}</h2>
            {withSearch ? <SearchBar onSearchSubmit={onSearchSubmit} clearResults={clearResults} /> : null}
        </div>
    )
}