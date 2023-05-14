import { Link } from "react-router-dom";
import placeholder from "../../assets/img/error.svg"

export default function FetchError() {
  return (
    <>
      <h2 className="general-header">An error happened, try again later!</h2>
      <p className="general-note">Read <Link to="/faq" style={{ textDecoration: "none"}}>FAQ</Link> to find out why this could happen.</p>
      <div className="empty-content" style={{ backgroundImage: `url(${placeholder})`}} />
    </>
  )
}