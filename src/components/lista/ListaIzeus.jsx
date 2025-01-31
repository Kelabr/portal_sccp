import Link from "next/link"
import { Card, CardHeader,CardTitle, CardDescription } from "../ui/card"
import {PencilLine} from 'lucide-react'

export default function Lista(){
    return(
        <div className="flex w-max-[1200px] flex-col sm:flex-row ">
        <div className=" max-w-[1200px] sm:flex sm:flex-wrap">
                <Link href='./izeus/faixa' className="" >
                    <Card className='h-[180px] max-w-[350px] sm:mr-3 sm:mb-3 sm:mt-4 sm:hover:-translate-y-3 sm:transition-transform sm:duration-300 mb-4'>
                        <CardHeader>
                            <div className="flex mb-2">
                                <PencilLine className="mr-3" size={30}></PencilLine>
                                <CardTitle className='text-2xl'>Faixa de Horário</CardTitle>
                            </div>
                            <CardDescription className='text-base ml-10'>Como efetuar o cadastro da faixas de horário</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>

                <Link href='./izeus/req_eventual_extra' className="" >
                    <Card className='h-[180px] max-w-[350px] sm:mr-3 sm:mt-4 sm:hover:-translate-y-3 sm:transition-transform sm:duration-300'>
                        <CardHeader>
                            <div className="flex mb-2">
                                <PencilLine className="mr-3" size={30}></PencilLine>
                                <CardTitle className='text-2xl'>Requerimento de Hora Extra / Eventual</CardTitle>
                            </div>
                            <CardDescription className='text-base ml-10'>Como lançar requerimentos de aulas eventuais</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>

                <Link href='./izeus/cadastro' className="" >
                    <Card className='h-[180px] max-w-[350px] sm:mr-3 mt-4 lg:w-[350px] sm:hover:-translate-y-3 sm:transition-transform sm:duration-300'>
                        <CardHeader>
                            <div className="flex mb-2">
                                <PencilLine className="mr-3" size={30}></PencilLine>
                                <CardTitle className='text-2xl'>Inserção</CardTitle>
                            </div>
                            <CardDescription className='text-base ml-10'>Como efeutar efetuar uam inserção</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>

                <Link href='./izeus/cadastro' className="" >
                    <Card className='h-[180px] max-w-[350px] sm:mr-3 mt-4 sm:hover:-translate-y-3 sm:transition-transform sm:duration-300'>
                        <CardHeader>
                            <div className="flex mb-2">
                                <PencilLine className="mr-3" size={30}></PencilLine>
                                <CardTitle className='text-2xl'>Solicitação de Compensação</CardTitle>
                            </div>
                            <CardDescription className='text-base ml-10'>Como solicitar uma compensação de horário</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>

                <Link href='./izeus/acesso' className="" >
                    <Card className='h-[180px] max-w-[350px] sm:mr-3 mt-4 sm:hover:-translate-y-3 sm:transition-transform sm:duration-300'>
                        <CardHeader>
                            <div className="flex mb-2">
                                <PencilLine className="mr-3" size={30}></PencilLine>
                                <CardTitle className='text-2xl'>Acesso ao Sistema Izeus</CardTitle>
                            </div>
                            <CardDescription className='text-base ml-10'>Como acessar o sistema izeus</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
               
        </div>
</div>

    )
}