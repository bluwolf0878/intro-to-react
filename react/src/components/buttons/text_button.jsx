export const Buttontext = (props,) => {
    return(
        <button onClick={livratter}>
            
            {props.textvalue}
        </button>
    );
    function livratter(onClick) {
       console.log(['pasta', 'lasange', 'tomatsuppe', 'risengrød', 'kødsovs']);
      
        
    }
    function button() {
        console.log(props.textvalue)
        
    }
};
