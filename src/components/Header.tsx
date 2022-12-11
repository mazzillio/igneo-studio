import Image from "next/image";
import logo from "/public/favicon.ico";
import { ListServices } from "./ListServices";
export function Header() {
 
  return(
    <header className="flex flex-row justify-between bg-transparent pt-5">
      <div className="mt-4 mb-2">
        <Image 
          src={logo} 
          alt="icone do igneo studios" 
          width={200}
        />
      </div>     
      <ListServices isHead={true}/>
    </header>
  );
}