import { Buttontext } from "../buttons/text_button";

const eventclick = () => {
    alert('click here')
}

export const Ptext = () => {
    return (
      <p>
        <Buttontext Size={small} color="blue" textValue="klik red" clickEvent={eventclick} />
        <Buttontext Size={medium} color="red" textValue="klik green" clickEvent={eventclick} />
        <Buttontext Size={large} color="green" textValue="klik blue" clickEvent={eventclick} />
      </p>
    );
  };