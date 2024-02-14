import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <div className="header">
        <Navbar />
        <p>
          This app will help you find visa requirements for your travel
          destination. Please select your origin and destination countries to
          get started.
        </p>
      </div>
    </>
  );
}

export default Header;
