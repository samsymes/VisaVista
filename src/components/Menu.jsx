function Menu() {
  return (
    <>
      <select className="form-select" aria-label="Default select example">
        <option defaultValue>select nationality/destination</option>
        <option value="canada">Canada</option>
        <option value="usa">United States</option>
        <option value="mexico">Mexico</option>
      </select>
    </>
  );
}

export default Menu;
