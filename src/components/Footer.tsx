import { ListServices } from "./ListServices";
export function Footer() {
  return <footer className="flex justify-between items-center px-10 py-5">
    <p className="text-2xl">Produzido por Estúdio Igneo</p>
    <ListServices isHead={false}/>
  </footer>;

}