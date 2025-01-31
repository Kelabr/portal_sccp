import Link from "next/link"
import Image from "next/image"

export default function Insercao(){
    return(
        <div className="pt-28 px-3 flex flex-col items-center">   
        <div className="flex justify-center w-max-[1200px] flex-col sm:flex-row ">
            <div className=" w-full max-w-[1200px]">
                <div>
                    <h1 className="mb-3 text-3xl font-medium">Inserção</h1>
                </div>
               
                <div>
                    <p>O obejetivo dessa página é ensinar ao leitor a efetuar uma inserção no sistema Izeus </p>
                </div>
                <div className="mt-8 ">
                    <p className="text-xl font-medium">Conhecimentos necessários:</p>
                    <ul className="list-disc pl-6">
                       <Link href='./acesso'><li className="italic text-colorcubatao underline">Acesso ao sistema Izeus</li></Link> 
                    </ul>
                </div>

                <div className="mt-12 mb-4 ">
                    <ul className="">
                       <Link href='#'><li className="">Ao entrar no sistema Izeus você se deparará com uma tela similar a imagem abaixo</li></Link> 
                    </ul>
                </div>

                <div className="h-80 max-h-[250px] sm:max-h-80 relative max-w-[600px]"> 
                        <Image
                        className=""
                        src='/reqEventual/painel.png'
                        fill
                        alt="Painel Izeus"
                        ></Image>
                </div>

                
                <div className="mt-12 mb-8 ">
                    <ul className="">
                       <li className="">Primeiramente você deve clicar na opção <strong>"Frequência"</strong> na aba superior mostrada na imagem a cima. Aguarde o carregameto do sistema</li>
                    </ul>
                </div>

                <div className="h-20 max-h-[400px] sm:max-h-96 sm:h-[200px] relative max-w-[1000px]"> 
                        <Image
                        className="object-contain"
                        src='/reqEventual/cadastror.png'
                        fill
                        alt="Painel Izeus"
                        ></Image>
                </div>

                <div className="mt-12 mb-8 ">
                    <ul className="">
                       <li className="">Digite no campo <strong>"Funcionário:"</strong> a matrícula do funcionário em questão.</li>
                    </ul>
                </div>

                <div className="h-48 max-h-[350px] sm:max-h-32 sm:h-[700px] relative max-w-[1400px]"> 
                        <Image
                        className="object-contain"
                        src='/reqEventual/horario.png'
                        fill
                        alt="Painel Izeus"
                        ></Image>
                </div>

                <div className="mt-12 mb-8 ">
                    <ul className="">
                       <li className="">Clique no <strong>"+"</strong> para abrir a aba requerimento. Na aba requerimento você irá visualizar os campos a baixo </li>
                    </ul>
                </div>

                <div className="h-48 max-h-[350px] sm:max-h-48 sm:h-[700px] relative max-w-[800px]"> 
                        <Image
                        className=""
                        src='/reqEventual/requerimento.png'
                        fill
                        alt="Painel Izeus"
                        ></Image>
                </div>

                <div className="mt-12 mb-8 ">
                    <ul className="">
                       <li className="">Clique no campo cinza com a escrita <strong>"Nada Selecionado"</strong></li>
                    </ul>
                </div>

                <div className="h-48 max-h-[350px] sm:max-h-48 sm:h-[900px] relative max-w-[400px]"> 
                        <Image
                        className=""
                        src='/reqEventual/eventual.png'
                        fill
                        alt="Painel Izeus"
                        ></Image>
                </div>

                <div className="mt-12 mb-8 ">
                    <ul className="">
                       <li className="">Clicke em <strong>"Inserir Marcações"</strong></li>
                    </ul>
                </div>

                <div className="h-80 max-h-[350px] sm:max-h-[2000px] sm:h-[700px] relative max-w-[1000px] sm:max-w-[1000px]"> 
                        <Image
                        className=""
                        src='/insercao/insercao.png'
                        fill
                        alt="Painel Izeus"
                        ></Image>
                </div>

                <div className="mt-12 mb-8 ">
                    <ul className="">
                       <li className="">Preencha o Horário  que deseja inserir e clique em enviar. Assim você terá feito uma inserção</li>
                    </ul>
                </div>



            </div>
        </div>
    </div>
       
    )
}