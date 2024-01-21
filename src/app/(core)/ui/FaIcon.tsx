import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

export default function FaIcon({icon, className}: {icon:IconDefinition, className?:string}) {
    return (
        <FontAwesomeIcon icon={icon} width={20} height={20}
            style={{marginLeft: 4, marginRight: 4}} className={className} />
    )
}