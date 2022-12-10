interface ButtonProps{
  content:string;
  width?:number;
}
export function Button({content, width}:ButtonProps) {
  const text="Olá, gostaria de solicitar um orçamento.";
  const num ="5538992085656";
  const sendMessageOrc=()=>{
    window.open(`https://api.whatsapp.com/send?phone=${num}&text=${text}`,"_blank");
  };
  return(
    <button 
      className={`w-[${width}px] border-primary-300 rounded bg-primary-300 text-white text-2xl py-8 px-2 my-4 transition duration:800 hover:transform hover:scale-125 break-words`}
      onClick={sendMessageOrc}
    >
      {content}
    </button>);
}