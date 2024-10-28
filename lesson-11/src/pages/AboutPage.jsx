import { Link, useParams } from "react-router-dom";

export default function AboutPage() {
  const params = useParams();
  return (
    <div>
      <h1>About Us page</h1>
      <p>We are Company PLC ({params.city})</p>
      <Link to="/about/london">London</Link>
      <Link to="/about/paris">Paris</Link>
      <Link to="/about/berlin">Berlin</Link>
      <pre>{JSON.stringify(params, null, 4)}</pre>
    </div>
  );
}
