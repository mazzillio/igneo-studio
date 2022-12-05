import Image from "next/image";
import logo from "/public/favicon.ico";
export function Header() {
  const click=(param:string)=>
  {
    window.location.href=`/#${param}`;
  };    
  return(
    <header className="flex flex-row justify-between bg-transparent w-full ml-2 pt-5 px-7">
      <Image 
        src={logo} 
        alt="icone do igneo studios" 
        height={125}
        className="mt-4 mb-2"
      />     
      <nav className="w-1/3 mt-5 text-white">
        <ul className="w-full list-none flex flex-row justify-evenly">
          <li 
            className="hover:cursor-pointer hover:text-primary-300" 
            onClick={()=> click("sobre")}
          >
            Sobre Nós
          </li>
          <li 
            className="hover:cursor-pointer hover:text-primary-300" 
            onClick={()=> click("servicos")}
          >
            Serviços
          </li>
          <li 
            className="hover:cursor-pointer hover:text-primary-300" 
            onClick={()=> click("portifolio")}
          >
            Portifólio
          </li>
        </ul>
      </nav>
    </header>
  );
}