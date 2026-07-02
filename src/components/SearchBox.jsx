import "./SearchBox.css";

export default function SearchBox({
  enrollment,
  setEnrollment,
  error,
  setError,
}) {

  const handleEnrollment = (e) => {
    const value = e.target.value
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, "");

    setEnrollment(value);

    if (value.length >= 12) {
      setError("");
    }
  };

  return (
    <div>
         <div className="result-heading">
        Result - B.E. / B.Tech / B.Pharmacy
        </div>
    <section className="search-section">
        
     

      <div className="search-body">

        <div className="row">

          {/* Enrollment */}
          <div className="enroll">
          <label className="name">Enrollment No.</label>

          </div>

          <div className="input-box">

            <input
              type="text"
              className={`textbox ${error ? "error-border" : ""}`}
              value={enrollment}
              onChange={handleEnrollment}
            />

            {error && (
              <small className="required">
                {error}
              </small>
            )}

          </div>

          {/* Semester */}
          <div className="sem">
          <label>Semester</label>
            
          </div>
          <div className="options1">
             
          <select className="semester">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
          </div>



          {/* Radio Buttons */}

          <div className="radio-row">

            <label className="radio-box">
              <input
                type="radio"
                name="grade"
                defaultChecked
              />
              Grading
            </label>

            <label className="radio-box">
              <input
                type="radio"
                name="grade"
              />
              Non-Grading
            </label>

          </div>

        </div>

      </div>

    </section>
    </div>
  );
}