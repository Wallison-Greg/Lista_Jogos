function ListItem(props){
    return(
        <li>
            <a target="_blank" rel="noreferrer" href={props.href}>
                <img src={props.src} alt={props.ault}/>
            </a>
        </li>
    )
}

export default ListItem;