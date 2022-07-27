import Filho from "./Filho";

export default function Pai(props) {
    return (
     <div>
         <Filho nome="Mateus" familia={props.familia}/>
         <Filho nome="Mateus" familia={props.familia}/>
         <Filho nome="Mateus" {...props}/>
     </div>
    ) 
 }