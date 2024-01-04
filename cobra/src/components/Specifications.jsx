const Specifications = () => {
    return (
        <div className="mx-12 py-8">
            <div className="border-b mb-7">
                <a><h1 className="text-3xl cursor-pointer font-TitilliumWeb-SemiBold hover:text-blue-700 hover:underline">SPECIFICATIONS</h1></a>
            </div>
            <div className="table-responsive table-container overflow-x-auto">
                <table className="table text-nowrap tracking-wider">
                    <tbody>
                        <tr className="bg-gray-100 border-y">
                        <th className="align-top">
                            <b>LOFT</b>
                        </th>
                        <th className="align-top">
                            <b>LOFT/LIE SETTINGS</b>
                            <table className="table-auto w-full table-fixed">
                                <tbody>
                                    <tr>
                                        <td>-1.5°</td>
                                        <td>-1°</td>
                                        <td>-1° Draw</td>
                                        <td><strong>STD</strong></td>
                                        <td>STD Draw</td>
                                        <td>+1°</td>
                                        <td>+1° Draw</td>
                                        <td>+1.5°</td>
                                    </tr>
                                </tbody>
                            </table>
                        </th>
                        <th className="align-top">
                            <b>STD LIE</b>
                        </th>
                        <th className="align-top">
                            <b>WEIGHT ADJUSTABILITY</b>
                        </th>
                        <th className="align-top">
                            <b>LENGTH</b>
                        </th>
                        <th className="align-top">
                            <b>SHAFT FLEX</b>
                        </th>
                        <th className="align-top">
                            <b>SWING WEIGHT / SHAFT</b>
                        </th>
                        <th className="align-top">
                            <b>RH/LH</b>
                        </th>
                        </tr>
                        <tr className="border-y-gray-200">
                            <td className="align-top">
                                <b>9.0°</b>
                            </td>
                            <td>
                                <table className="table-auto w-full border-hidden table-fixed align-top">
                                    <tbody>
                                        <tr>
                                            <td >7.5°<br/>(57.50°)</td>
                                            <td>8.0°<br/>(56.80°)</td>
                                            <td>8.0°D<br/>(58.10°)</td>
                                            <td><b>9.0°<br/>(56.20°)</b></td>
                                            <td>9.0°D<br/>(58.80°)</td>
                                            <td>10.0°<br/>(56.80°)</td>
                                            <td>10.0°D<br/>(58.10°)</td>
                                            <td>10.5°<br/>(57.50°)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="align-top">
                                56.20°
                            </td>
                            <td className="align-top">
                                FIXED BACK
                            </td>
                            <td className="align-top">
                                45.50"
                            </td>
                            <td className="align-top">
                                S
                            </td>
                            <td className="align-top">
                                D4
                            </td>
                            <td className="align-top">
                                RH
                            </td>
                        </tr>
                        <tr className="bg-gray-100">
                            <td className="align-top">
                                <b>10.5°</b>
                            </td>
                            <td>
                                <table className="w-full">
                                    <tbody>
                                        <tr>
                                            <td>9.0°<br/>(58.50°)</td>
                                            <td>9.5°<br/>(57.80°)</td>
                                            <td>9.5°D<br/>(59.10°)</td>
                                            <td><b>10.5°<br/>(57.20°)</b></td>
                                            <td>10.5°D<br/>(59.50°)</td>
                                            <td>11.5°<br/>(57.80°)</td>
                                            <td>11.5°D<br/>(59.10°)</td>
                                            <td>12.0°<br/>(58.50°)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td className="align-top">
                                57.20°
                            </td>
                            <td className="align-top">
                                FIXED BACK
                            </td>
                            <td className="align-top">
                                45.50"
                            </td>
                            <td className="align-top">
                                S, R
                            </td>
                            <td className="align-top">
                                D4
                            </td>
                            <td className="align-top">
                                RH/*LH
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className="mt-4 leading-relaxed">
                    *LH custom only in 10.5° head<br/>
                    *Arccos grip adds .25" in custom
          
                </p>
            </div>
        </div>
    )
}

export default Specifications