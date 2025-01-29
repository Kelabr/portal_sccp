import Link from "next/link"
import { Card, CardHeader,CardTitle, CardDescription } from "../ui/card"
import {PencilLine} from 'lucide-react'

export default function Lista(){
    return(
        <div className="flex justify-center w-max-[1200px] flex-col sm:flex-row ">
        <div className=" w-full max-w-[1200px]">
                <Link href='./izeus/cadastro' className="" >
                    <Card className='h-[180px] max-w-[350px]'>
                        <CardHeader>
                            <div className="flex mb-2">
                                <PencilLine className="mr-3" size={30}></PencilLine>
                                <CardTitle className='text-2xl'>Cadastrar Faixa de Horário</CardTitle>
                            </div>
                            <CardDescription className='text-base ml-10'>Como efeutar o cadastro da faixas de horário</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>

                <Link href='#'>
                    <Card className='h-[130px] max-w-[350px] mt-5  '>
                        <CardHeader>
                            <CardTitle className='text-2xl'>Telefones</CardTitle>
                            <CardDescription className='text-base'>Lista de telefones da Secretaria da Educação</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>

                <Link href='#'>
                    <Card className='h-[130px] max-w-[350px] mt-5'>
                        <CardHeader>
                            <CardTitle className='text-2xl'>Relatório Mensal</CardTitle>
                            <CardDescription  className='text-base'>Prenchimento de Cargas dos servidores e hora extra</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
        </div>
</div>

    )
}