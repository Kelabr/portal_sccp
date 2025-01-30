import Link from "next/link"
import { Card, CardHeader,CardTitle, CardDescription } from "../ui/card"
import {PencilLine} from 'lucide-react'

export default function Lista(){
    return(
        <div className="flex w-max-[1200px] flex-col sm:flex-row ">
        <div className=" max-w-[1200px] sm:flex sm:flex-wrap">
                <Link href='./izeus/cadastro' className="" >
                    <Card className='h-[180px] max-w-[350px] sm:mr-3 sm:mb-3 sm:mt-4'>
                        <CardHeader>
                            <div className="flex mb-2">
                                <PencilLine className="mr-3" size={30}></PencilLine>
                                <CardTitle className='text-2xl'>Cadastrar Faixa de Horário</CardTitle>
                            </div>
                            <CardDescription className='text-base ml-10'>Como efeutar o cadastro da faixas de horário</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>

                <Link href='./izeus/cadastro' className="" >
                    <Card className='h-[180px] max-w-[350px] sm:mr-3 mt-4 sm:mt-4 mb-3 sm:mb-0'>
                        <CardHeader>
                            <div className="flex mb-2">
                                <PencilLine className="mr-3" size={30}></PencilLine>
                                <CardTitle className='text-2xl'>Cadastrar Faixa de Horário</CardTitle>
                            </div>
                            <CardDescription className='text-base ml-10'>Como efeutar o cadastro da faixas de horário</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>

                <Link href='./izeus/cadastro' className="" >
                    <Card className='h-[180px] max-w-[350px] sm:mr-3 sm:mt-4'>
                        <CardHeader>
                            <div className="flex mb-2">
                                <PencilLine className="mr-3" size={30}></PencilLine>
                                <CardTitle className='text-2xl'>Cadastrar Faixa de Horário</CardTitle>
                            </div>
                            <CardDescription className='text-base ml-10'>Como efeutar o cadastro da faixas de horário</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>

                <Link href='./izeus/cadastro' className="" >
                    <Card className='h-[180px] max-w-[350px] sm:mr-3 mt-4'>
                        <CardHeader>
                            <div className="flex mb-2">
                                <PencilLine className="mr-3" size={30}></PencilLine>
                                <CardTitle className='text-2xl'>Cadastrar Faixa de Horário</CardTitle>
                            </div>
                            <CardDescription className='text-base ml-10'>Como efeutar o cadastro da faixas de horário</CardDescription>
                        </CardHeader>
                    </Card>
                </Link>
               
        </div>
</div>

    )
}