import React from 'react'

function MarkSheet(props) {
    let telMarks=Number(props.telMarks);
    let hinMarks=Number(props.hinMarks);
    let englMarks=Number(props.englMarks);
    let mathsMarks=Number(props.mathsMarks);
    let sciMarks=Number(props.sciMarks);
    let socMarks=Number(props.socMarks);

    let totalMarks = telMarks+hinMarks+englMarks+mathsMarks+sciMarks+socMarks; 
    let perc = (totalMarks/600) *100


  return (
    <div>
    <div className='divContainer'>
      <table>
        <caption>{props.name}MarkSheet</caption>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Max Marks</th>
            <th>Min Marks</th>
            <th>Result</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <td>Telugu</td>
                <td>100</td>
                <td>{telMarks}</td>
                <td>{telMarks>=35 ? "Pass" : "Fail"}</td>
                <td>{telMarks >= 75 ? "Excellent" : telMarks >= 50 ? "Good" : telMarks >= 35 ? "Average" : "Need to Improve"}</td>
            </tr>
            <tr>
                <td>Hindi</td>
                <td>100</td>
                <td>{hinMarks}</td>
                <td>{hinMarks>=35 ? "Pass" : "Fail"}</td>
                <td>{hinMarks >= 75 ? "Excellent" : hinMarks >= 50 ? "Good" : hinMarks >= 35 ? "Average" : "Need to Improve"}</td>
            </tr>
            <tr>
                <td>English</td>
                <td>100</td>
                <td>{englMarks}</td>
                <td>{englMarks>=35 ? "Pass" : "Fail"}</td>
                <td>{englMarks >= 75 ? "Excellent" : englMarks >= 50 ? "Good" : englMarks >= 35 ? "Average" : "Need to Improve"}</td>
            </tr>
            <tr>
                <td>Mathematics</td>
                <td>100</td>
                <td>{mathsMarks}</td>
                <td>{mathsMarks>=35 ? "Pass" : "Fail"}</td>
                <td>{mathsMarks >= 75 ? "Excellent" : mathsMarks >= 50 ? "Good" : mathsMarks >= 35 ? "Average" : "Need to Improve"}</td>
            </tr>
            <tr>
                <td>Science</td>
                <td>100</td>
                <td>{sciMarks}</td>
                <td>{sciMarks>=35 ? "Pass" : "Fail"}</td>
                <td>{sciMarks >= 75 ? "Excellent" : sciMarks >= 50 ? "Good" : sciMarks >= 35 ? "Average" : "Need to Improve"}</td>
            </tr>
            <tr>
                <td>Social</td>
                <td>100</td>
                <td>{socMarks}</td>
                <td>{socMarks>=35 ? "Pass" : "Fail"}</td>
                <td>{socMarks >= 75 ? "Excellent" : socMarks >= 50 ? "Good" : socMarks >= 35 ? "Average" : "Need to Improve"}</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <th>Total</th>
                <th>600</th>
                <th>{totalMarks} ({perc.toFixed(2)}%)</th>
                <th>Pass</th>
                <th>{perc >= 75 ? "Excellent" : perc >= 50 ? "Good" : perc >= 35 ? "Avarage" : 
                     perc >= 0 ?  "Fail" : "Need to Improve"}</th>
            </tr>
        </tfoot>
      </table>
      </div>
    </div>
  )
}

export default MarkSheet
