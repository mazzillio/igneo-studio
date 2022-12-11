import { redirect } from "../utils/redirect";
interface PropsList{
    isHead:boolean;
}
export function ListServices({ isHead }:PropsList) {
  return(
    <nav className={`${isHead ? "mt-5":""} text-white w-1/3 text-2xl`}>
      <ul className="w-full list-none flex flex-row justify-between">
        <li 
          className="hover:cursor-pointer hover:text-primary-300" 
          onClick={()=> redirect("sobre")}
        >
            Sobre Nós
        </li>
        <li 
          className="hover:cursor-pointer hover:text-primary-300" 
          onClick={()=> redirect("servicos")}
        >
            Serviços
        </li>
        <li 
          className="hover:cursor-pointer hover:text-primary-300" 
          onClick={()=> redirect("portifolio")}
        >
            Portifólio
        </li>
      </ul>
    </nav>
  );
}