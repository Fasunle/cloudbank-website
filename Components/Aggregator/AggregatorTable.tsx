//
const AggregatorTable = () => {
  const data = [
    {
      number: 1,
      revenue: '80 - 100',
      noOfTarminals: 20,
    },
    {
      number: 2,
      revenue: '60 - 79',
      noOfTarminals: 15,
    },
    {
      number: 3,
      revenue: '50 - 59',
      noOfTarminals: 10,
    },
    {
      number: 4,
      revenue: '40 - 49',
      noOfTarminals: 5,
    },
    {
      number: 5,
      revenue: 'Less than 39',
      noOfTarminals: '1 - 4',
    },
  ];
  return (
    <div className='mt-[6rem]'>
      <table className='w-[900px] h-[300px] m-auto xs-max:w-[360px]' style={{}}>
        <thead className='text-white' style={{ border: '1px solid black', background: '#008080' }}>
          <tr className=' h-[3rem]'>
            <th>SN</th>
            <th>REVENUE EXPECTATION(%)</th>
            <th>NUMBER OF TERMINALS</th>
          </tr>
        </thead>
        <tbody className='w-[900px]'>
          {data.map((item, i) => (
            <tr
              key={i}
              className='w-[900px] text-center p-[1rem]'
              style={{ border: '1px solid black' }}
            >
              <td>{item.number}</td>
              <td>{item.revenue}</td>
              <td>{item.noOfTarminals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AggregatorTable;
