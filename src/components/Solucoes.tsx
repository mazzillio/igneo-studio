import Image, { StaticImageData } from "next/image";
import icon from "/public/favicon.ico";

interface Solucao{
  icone:StaticImageData;
  title:string;
  text:string;
}

const solucoesData = [
  {
    icone:icon,
    title:"Identidade Visual",
    text:"Agregue valor a sua marca gere conexão facilite a decisão de compra do seu cliente com uma comunicação visual e estratágica"  
  },
  {
    icone:icon,
    title:"Identidade Visual",
    text:"Agregue valor a sua marca gere conexão facilite a decisão de compra do seu cliente com uma comunicação visual e estratágica"  
  },
  {
    icone:icon,
    title:"Identidade Visual",
    text:"Agregue valor a sua marca gere conexão facilite a decisão de compra do seu cliente com uma comunicação visual e estratágica"  
  }
];
export function Solucoes(){
  return(
    <div 
      id="servicos"
      className="w-full flex flex-col items-center mt-[500px]"
    >
      <h2 className="text-5xl text-white">Solucoes oferecidas</h2>
      <div className="w-4/5 flex justify-between">
        {
          solucoesData.map((solucao:Solucao) =>{
            return(
              <div key={solucao.title}>
                <Image src={solucao.icone} alt={solucao.title}/>
                <h3>{solucao.title}</h3>
                <p>{solucao.text}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
