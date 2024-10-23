const Gendercheckbox = ({ oncheckbox, selectedgender }) => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer  ${
            selectedgender === "male" ? "selected" : " "
          } `}
        >
          <span className="label-text text-white">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedgender === "male"}
            onChange={() => oncheckbox("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedgender === "female" ? "selected" : " "
          } `}
        >
          <span className="label-text text-white">FeMale</span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectedgender === "female"}
            onChange={() => oncheckbox("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default Gendercheckbox;
