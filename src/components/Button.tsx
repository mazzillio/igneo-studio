interface ButtonProps{
  content:string;
  width?:number;
}
export function Button({content, width}:ButtonProps) {
  return(
    <button 
      className={`w-[${width}px] border-primary-300 rounded bg-primary-300 text-white text-2xl py-8 px-2 my-4 transition duration:800 hover:transform hover:scale-125 break-words`}
    >
      {content}
    </button>);
}