import Image from "next/image";
import logo from "/public/favicon.ico";
export function Header() {
  const click=(param:string)=>
  {
    window.location.href=`/#${param}`;
  };    
  return(
    <header className="flex flex-row justify-between bg-transparent ml-2 pt-5">
      <div className="pl-36 mt-4 mb-2">
        <Image 
          src={logo} 
          alt="icone do igneo studios" 
          height={125}
          width={175}
        />
      </div>     
      <nav className="mt-5 text-white w-1/3 px-10 text-4xl">
        <ul className="w-full list-none flex flex-row justify-between">
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