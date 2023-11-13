import Button from "@mui/material/Button";
function ChecklistCard() {
  return (
    <>
      <div className="card " id="checkListCard">
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
            <Button variant="contained" size="medium">
              Do Something Else
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChecklistCard;
