import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import Mural from "../mural/Mural"

export default function Tutoriais(){
    return(
        
            <div className="flex justify-center w-max-[1200px] flex-col sm:flex-row ">
                    <div className=" w-full max-w-[1200px]">
                            <Link href='./izeus' className="" >
                                <Card className='h-[130px] max-w-[350px] sm:hover:-translate-y-3 sm:transition-transform sm:duration-300'>
                                    <CardHeader>
                                        <CardTitle className='text-2xl'>Izeus</CardTitle>
                                        <CardDescription className='text-base'>Manual referente ao Sistema de Ponto Izeus</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>

                            <Link href='#'>
                                <Card className='h-[130px] max-w-[350px] mt-5 sm:hover:-translate-y-3 sm:transition-transform sm:duration-300  '>
                                    <CardHeader>
                                        <CardTitle className='text-2xl'>Telefones</CardTitle>
                                        <CardDescription className='text-base'>Lista de telefones da Secretaria da Educação</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>

                            <Link href='#'>
                                <Card className='h-[130px] max-w-[350px] mt-5 sm:hover:-translate-y-3 sm:transition-transform sm:duration-300'>
                                    <CardHeader>
                                        <CardTitle className='text-2xl'>Relatório Mensal</CardTitle>
                                        <CardDescription  className='text-base'>Prenchimento de Cargas dos servidores e hora extra</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                    </div>
                    <Mural/>
            </div>

        
    )
}