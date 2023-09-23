//

const AggregatorTable = (
  data: {
    number: number;
    revenue: string;
    noOfTarminals: string;
  }[]
) => {
  return (
    <div className="mt-[6rem]">
      <table className="w-[900px] h-[300px] m-auto xs-max:w-[360px]" style={{}}>
        <thead
          className="text-white"
          style={{ border: "1px solid black", background: "#008080" }}
        >
          <tr className=" h-[3rem]">
            <th>SN</th>
            <th>REVENUE EXPECTATION(%)</th>
            <th>NUMBER OF TERMINALS</th>
          </tr>
        </thead>
        <tbody className="w-[900px]">
          {data.map((item, i) => (
            <tr
              key={i}
              className="w-[900px] text-center p-[1rem]"
              style={{ border: "1px solid black" }}
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
