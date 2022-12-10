import { Button } from "./Button";

export function Apresentacao() {
  return(
    <div className="w-full mt-20 flex flex-col items-center">
      <article className=" text-white text-7xl mb-6 leading-normal flex items-center flex-col">
        <p className="text-left w-full">Forje <span className="text-primary-300">conexões</span> com seu <span className="text-primary-300">público</span></p>
        <p className="text-left w-full">através de um desgin <span className="text-primary-300">estratégico</span></p>
        <p className="text-left w-full">e de <span className="text-primary-300">impacto</span></p>
      </article>
      <Button 
        content="Orçamentos Gratuitos"
        width={200}
      />
    </div>
  );
}