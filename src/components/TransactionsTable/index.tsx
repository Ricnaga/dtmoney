import { Container } from './styles'

export function TransactionsTable() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Developer</td>
                        <td>20/02/2021</td>
                    </tr>
                    
                    <tr>
                        <td>Website</td>
                        <td className="withdraw">R$12.000,00</td>
                        <td>Developer</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container> 
    )
}