import useNavigation from "../hooks/use-navigation";

function Link({ to, children }) {

    const { navigate } = useNavigation();



    const handleClick = (event) => {
        //If ctrl button held when link clicked
        //It will open link in a new tab
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();

        navigate(to);

    };

    return <a href={to} onClick={handleClick}>{children}</a>
}

export default Link;