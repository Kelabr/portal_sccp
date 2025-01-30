import Link from "next/link"
import Image from "next/image"

export default function Cadastro(){
    return(
        <div className="pt-28 px-3 flex flex-col items-center">   
            <div className="flex justify-center w-max-[1200px] flex-col sm:flex-row ">
                <div className=" w-full max-w-[1200px]">
                    <div>
                        <h1 className="mb-3 text-3xl font-medium">Faixa de Horário</h1>
                    </div>
                    <div className="mt-3 mb-8 italic text-red-600"><p>Importante: Faixa de horário só é cadastrada para professor</p></div>
                    <div>
                        <p>O obejetivo desse documento é ensinar ao leitor a criar faixas de horários no sistema de ponto Izeus, atualmente utilizado na Secretaria Municipal de Educação do município de Cubatão.</p>
                    </div>
                    <div className="mt-8 ">
                        <p className="text-xl font-medium">Conhecimentos necessários:</p>
                        <ul className="list-disc pl-6">
                           <Link href='#'><li className="italic text-colorcubatao underline">Acesso ao sistema Izeus</li></Link> 
                        </ul>
                    </div>

                    <div className="mt-12 mb-4 ">
                        <ul className="">
                           <Link href='#'><li className="">Ao entrar no sistema Izeus você se deparará com uma tela similar a imagem a baixo</li></Link> 
                        </ul>
                    </div>

                    <div className="h-80 max-h-[250px] sm:max-h-80 relative max-w-[600px]"> 
                            <Image
                            className=""
                            src='/faixa/painel.png'
                            fill
                            alt="Painel Izeus"
                            ></Image>
                    </div>

                    
                    <div className="mt-12 mb-8 ">
                        <ul className="">
                           <li className="">Essa será a tela que você mais irá vizualizar quando estiver lidando com o ponto digital, para criar uma faixa de horário você deve clicar na aba <strong>"Horário"</strong> em seguida cliar na aba <strong>"Lançamento de Horário de Plantão Extra Visualmente"</strong>. assim que finalizar esse passo provavelmente você vizualizará uma tela como a de baixo.</li>
                        </ul>
                    </div>

                    <div className="h-20 max-h-[250px] sm:max-h-96 sm:h-[200px] relative max-w-[700px]"> 
                            <Image
                            className=""
                            src='/faixa/cadastroh.png'
                            fill
                            alt="Painel Izeus"
                            ></Image>
                    </div>

                    <div className="mt-12 mb-8 ">
                        <ul className="">
                           <li className="">Digite no campo <strong>"Funcionário:"</strong> a matrícula do professor em qustão e seleciona o dia escolhido para cadastrar a faixa</li>
                        </ul>
                    </div>

                    <div className="h-48 max-h-[350px] sm:max-h-96 sm:h-[700px] relative max-w-[700px]"> 
                            <Image
                            className=""
                            src='/faixa/dias.png'
                            fill
                            alt="Painel Izeus"
                            ></Image>
                    </div>

                    <div className="mt-12 mb-8 ">
                        <ul className="">
                           <li className="">Após isso preencha os campos <strong>"Local"</strong>, <strong>"Faixa"</strong> e <strong>"Verba de horas normais"</strong> com os informações que se alinham com o horário cadastrado e clique em <strong>"Adicionar Faixa"</strong> </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
           
    )
}
