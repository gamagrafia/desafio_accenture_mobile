export interface DashProps {
    contaBanco: {
        id: number,
        lancamentos: [
            {
                conta: number,
                data: string,
                descricao: string,
                id: number,
                planoConta: {
                    descricao: string,
                    id: number,
                    login: string,
                    padrao: boolean,
                    tipoMovimento: string
                },
                tipo: string,
                valor: number
            }
        ],
        saldo: number
    },
    contaCredito: {
        id: number,
        lancamentos: [
            {
                conta: number,
                data: string,
                descricao: string,
                id: number,
                planoConta: {
                    descricao: string,
                    id: number,
                    login: string,
                    padrao: boolean,
                    tipoMovimento: string
                },
                tipo: string,
                valor: number
            }
        ],
        saldo: number
    },
}