import Link from "next/link"
import Image from "next/image"

export default function Acesso(){
    return(
        <div className="pt-28 px-3 flex flex-col items-center">   
        <div className="flex justify-center w-max-[1200px] flex-col sm:flex-row ">
            <div className=" w-full max-w-[1200px]">
                <div>
                    <h1 className="mb-3 text-3xl font-medium">Acesso ao Sistema Izeus</h1>
                </div>
               
                <div>
                    <p>O obejetivo dessa página é ensinar ao leitor a efetuar o primeiro acesso ao sistema Izeus </p>
                </div>
       

                <div className="mt-12 mb-14 ">
                    <ul className="">
                      <li className="">Primeiro passo é acessar a plataforma Izeus por meio deste Link</li> <Link className="text-colorcubatao underline" target="_blank" href='http://ponto.cubatao.sp.gov.br:28090/ponto'>http://ponto.cubatao.sp.gov.br:28090/ponto</Link> 
                    </ul>
                </div>

                <div className="h-80 sm:max-h-96 max-h-[250px] sm:h-[800px] relative max-w-[1000px]"> 
                        <Image
                        className=""
                        src='/acesso/login.png'
                        fill
                        alt="Painel Izeus"
                        ></Image>
                </div>

                
                <div className="mt-12 mb-8 ">
                    <ul className="">
                       <li className="">Coloque suas credenciais / dados no login</li>
                    </ul>
                </div>

                <div className="h-56 sm:max-h-96 sm:h-[800px] relative max-w-[1000px]"> 
                        <Image
                        className=""
                        src='/acesso/loginPreenchido.png'
                        fill
                        alt="Painel Izeus"
                        ></Image>
                </div>

                <div className="mt-12 mb-8 ">
                    <ul className="">
                       <li className="">Clique em entrar e pronto, você estará logado no Izeus</li>
                    </ul>
                </div>


            </div>
        </div>
    </div>
    )
}