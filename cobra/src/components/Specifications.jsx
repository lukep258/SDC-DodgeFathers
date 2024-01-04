const Specifications = () => {
    return (
        <div className="mx-12 py-8">
            <div className="border-b mb-7">
                <a><h1 className="text-3xl cursor-pointer hover:text-blue-700 hover:underline">SPECIFICATIONS</h1></a>
            </div>
            <div className="table-responsive table-container overflow-x-auto">
                <table className="table table-striped text-nowrap">
                    <tbody>
                        <tr className="bg-slate-100">
                        <th>
                            <b>LOFT</b>
                        </th>
                        <th>
                            <b>LOFT/LIE SETTINGS</b><br/>
                            <table>
                            <tbody><tr>
                                <td>-1.5°</td>
                                <td>-1°</td>
                                <td>-1° Draw</td>
                                <td><strong>STD</strong></td>
                                <td>STD Draw</td>
                                <td>+1°</td>
                                <td>+1° Draw</td>
                                <td>+1.5°</td>
                            </tr>
                            </tbody></table>
                        </th>
                        <th>
                            <b>STD LIE</b>
                        </th>
                        <th>
                            <b>WEIGHT ADJUSTABILITY</b>
                        </th>
                        <th>
                            <b>LENGTH</b>
                        </th>
                        <th>
                            <b>SHAFT FLEX</b>
                        </th>
                        <th>
                            <b>SWING WEIGHT / SHAFT</b>
                        </th>
                        <th>
                            <b>RH/LH</b>
                        </th>
                        </tr>
                        <tr>
                        <td>
                            <b>9.0°</b>
                        </td>
                        <td>
                            <table className="hosel-table">
                            <tbody><tr>
                                <td>7.5°<br/>(57.50°)</td>
                                <td>8.0°<br/>(56.80°)</td>
                                <td>8.0°D<br/>(58.10°)</td>
                                <td><b>9.0°<br/>(56.20°)</b></td>
                                <td>9.0°D<br/>(58.80°)</td>
                                <td>10.0°<br/>(56.80°)</td>
                                <td>10.0°D<br/>(58.10°)</td>
                                <td>10.5°<br/>(57.50°)</td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td>
                            56.20°
                        </td>
                        <td>
                            FIXED BACK
                        </td>
                        <td>
                            45.50"
                        </td>
                        <td>
                            S
                        </td>
                        <td>
                            D4
                        </td>
                        <td>
                            RH
                        </td>
                        </tr>
                        <tr className="bg-slate-100">
                        <td>
                            <b>10.5°</b>
                        </td>
                        <td>
                            <table className="hosel-table">
                            <tbody><tr>
                                <td>9.0°<br/>(58.50°)</td>
                                <td>9.5°<br/>(57.80°)</td>
                                <td>9.5°D<br/>(59.10°)</td>
                                <td><b>10.5°<br/>(57.20°)</b></td>
                                <td>10.5°D<br/>(59.50°)</td>
                                <td>11.5°<br/>(57.80°)</td>
                                <td>11.5°D<br/>(59.10°)</td>
                                <td>12.0°<br/>(58.50°)</td>
                            </tr>
                            </tbody></table>
                        </td>
                        <td>
                            57.20°
                        </td>
                        <td>
                            FIXED BACK
                        </td>
                        <td>
                            45.50"
                        </td>
                        <td>
                            S, R
                        </td>
                        <td>
                            D4
                        </td>
                        <td>
                            RH/*LH
                        </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    *LH custom only in 10.5° head<br/>
                    *Arccos grip adds .25" in custom
          
                </p>
            </div>
        </div>
    )
}

export default Specifications