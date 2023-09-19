import { LineChart, Line, XAxis, YAxis} from 'recharts';

const LineCharts=()=>{
    const marks = [
        {
          name: 'Emam Bokhari',
          point: 4.5,
          age: 40
        },
        {
          name: 'Sarah Smith',
          point: 3.8,
          age: 21
        },
        {
          name: 'John Doe',
          point: 4.2,
          age: 22
        },
        {
          name: 'Alice Johnson',
          point: 3.9,
          age: 24
        },
        {
          name: 'Michael Brown',
          point: 10.1,
          age: 20
        }
      ];
      
    return (
        <div>
            <LineChart width={850} height={300} data={marks}>
                <XAxis dataKey="name"/>
                <Line type='monotone' dataKey='point' stroke='red'/>
                <Line type="monotone" dataKey="age" />
                <YAxis dataKey={"age"} />

            </LineChart>
        </div>
    )
}
export default LineCharts