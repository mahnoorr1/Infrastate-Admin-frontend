import { Card } from "@mui/material"
import { LineChart } from "@mui/x-charts"
const ChartLine = () => {
    return(
        <Card sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10]}]}
                series={[
                    {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                width={400}
                height={300}
            />
        </Card>
    )
}

export default ChartLine;