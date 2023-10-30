function ChecklistCard() {
  return (
    <>
      <div className="card " style={{ width: "18rem" }}>
        <div className="card-body ">
          <h5 className="card-title">Check List</h5>
          <div className="card-text text-start">
            <div className="input-group mb-3">
              <div className="input-group-text">
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  value=""
                  aria-label="Checkbox for following text input"
                />
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with checkbox"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-text">
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  value=""
                  aria-label="Checkbox for following text input"
                />
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with checkbox"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-text">
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  value=""
                  aria-label="Checkbox for following text input"
                />
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with checkbox"
              />
            </div>
            <div className="input-group mb-3">
              <div className="input-group-text">
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  value=""
                  aria-label="Checkbox for following text input"
                />
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Text input with checkbox"
              />
            </div>
          </div>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}

export default ChecklistCard;
