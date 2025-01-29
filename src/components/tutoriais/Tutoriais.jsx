import Link from "next/link"
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card"
import Mural from "../mural/Mural"

export default function Tutoriais(){
    return(
        
            <div className="flex justify-center w-max-[1200px] flex-col">
                    <div className=" w-full max-w-[1200px]">
                            <Link href='#' className="" >
                                <Card className='h-[130px] max-w-[350px]'>
                                    <CardHeader>
                                        <CardTitle className='text-lg'>Izeus</CardTitle>
                                        <CardDescription>Manual referente ao Sistema de Ponto Izeus</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>

                            <Link href='#'>
                                <Card className='h-[130px] max-w-[350px] mt-5  '>
                                    <CardHeader>
                                        <CardTitle className='text-lg'>Telefones</CardTitle>
                                        <CardDescription>Lista de telefones da secretaria da educação</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>

                            <Link href='#'>
                                <Card className='h-[130px] max-w-[350px] mt-5'>
                                    <CardHeader>
                                        <CardTitle className='text-lg'>Relatório Mensal</CardTitle>
                                        <CardDescription>Prenchimento de Cargas dos servidores e hora extra</CardDescription>
                                    </CardHeader>
                                </Card>
                            </Link>
                    </div>
                    <Mural/>
            </div>

        
    )
}