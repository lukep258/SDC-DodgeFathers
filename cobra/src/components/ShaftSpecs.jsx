const ShaftSpecs = () => {


    return (
      <div className="mx-12 py-8 font-titillium text-gray-500" >
        <div className="border-b mb-7  text-gray-700">
            <a><h1 className="text-3xl cursor-pointer font-semibold hover:text-blue-700 hover:underline">SHAFT SPECS</h1></a>
        </div>
        
  
        <h3 className="text-[18px] font-bold mb-2 text-gray-700">Project X HZRDUS Gen 4 Black</h3>
  
        <p className="mb-4 text-zinc-600">
          Utilizing a new Dual Torsional Design throughout the shaft, HZRDUS Black Gen 4 creates optimized torques and maximum stability while featuring the classic HZRDUS Black profile of stiff butt, x-stiff midsection, and stiff tip, suited for an aggressive swinger
        </p>
  
        <div className="flex items-center justify-center mb-4">
          <img src="https://cdn.shopify.com/s/files/1/0562/1186/5673/files/hzrdus_black_g4.png" alt="Project X HZRDUS RDX Smoke Black"className="max-w-full h-auto" />
        </div>
        <div className="table-container overflow-x-auto">
            <table className="table w-full text-nowrap ">
            <thead className="bg-gray-100 uppercase text-slate-900 text-[16px] tracking-wide ">
                <tr className="border-t">
                <th className="font-bold border-b">Model</th>
                <th className="font-bold border-b">Flex</th>
                <th className="font-bold border-b">Weight</th>
                <th className="font-bold border-b">Launch</th>
                <th className="font-bold border-b">Spin</th>
                <th className="font-bold border-b">Torque</th>
                <th className="font-bold border-b">Tip Diameter</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                <td className="font-bold">Project X HZRDUS Gen 4 Black</td>
                <td>S (6.0)</td>
                <td>62g</td>
                <td>Low</td>
                <td>Low</td>
                <td>3.5</td>
                <td>0.335</td>
                </tr>
            </tbody>
            </table>
        </div>
      </div>
    );
  };
  
  export default ShaftSpecs;
  