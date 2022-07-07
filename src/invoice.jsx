import { useParams, useNavigate, useLocation, } from "react-router-dom";
import { getInvoice, deleteInvoice  } from "./data";

export default function Invoice() {
  let navigate = useNavigate();
  let location = useLocation();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <div className="container" style={{ padding: "1rem" }}>
      <p>{invoice.name}: {invoice.number} </p>
      <p>Total Due: {invoice.amount}</p>
      <p>Due Date: {invoice.due}</p>
        <p>
        <button className="btn btn-danger btn-sm"
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices" + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </div>
  );
}