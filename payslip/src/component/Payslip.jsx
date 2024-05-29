import React from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./Payslip.css";

const Payslip = () => {
  const downloadPdf = () => {
    const input = document.getElementById("payslip");

    document.getElementById("download-btn").classList.add("hide-for-pdf");

    html2canvas(input, { scale: 3 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("payslip.pdf");

      document.getElementById("download-btn").classList.remove("hide-for-pdf");
    });
  };

  return (
    <div id="payslip">
      <div className="parent">
        <div className="main1">
          <div className="down8">
            <div className="container9">
              <div className="header">
                <h1>Employee Payslip</h1>
              </div>
              <div className="employee-details">
                <h2>Employee Details</h2>
                <p>
                  <strong>Employee ID:</strong> 111
                </p>
                <p>
                  <strong>Name:</strong> Mohan
                </p>
                <p>
                  <strong>Department:</strong> Finance
                </p>
                <p>
                  <strong>Account Number:</strong> 5500694
                </p>
                <p>
                  <strong>IFSC Code:</strong> IFSC1205
                </p>
              </div>
              <div className="sala">
                <h2>Salary Details</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Basic Salary</th>
                      <th>Net Salary</th>
                      <th>HRA</th>
                      <th>TDS</th>
                      <th>PF</th>
                      <th>Allowance</th>
                      <th>CTC</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1000</td>
                      <td>800</td>
                      <td>200</td>
                      <td>0</td>
                      <td>100</td>
                      <td>150</td>
                      <td>1200</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="sign">
                <p>Employee Signature</p>
                <p>Manager Signature</p>
              </div>
              <div className="download">
                <button id="download-btn" className="btn" onClick={downloadPdf}>
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payslip;
