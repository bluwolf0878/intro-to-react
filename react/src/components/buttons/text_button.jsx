import { Buttontxtstyle } from "./buttontxt.styled";


export const Buttontext = ({textValue, bgColor, Size, clickEvent}) => {

    return(
        <Buttontxtstyle className={`${size}`} style={{color: bgColor}}  onClick={ () => clickEvent()}>{textValue}</Buttontxtstyle>
    );
    function livratter(onClick) {
       console.log(['pasta', 'lasange', 'tomatsuppe', 'risengrød', 'kødsovs']);
      
        
    }
    function button() {
        console.log(props.textvalue)
        
    }
};
