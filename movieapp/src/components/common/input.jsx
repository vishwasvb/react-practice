const Input = ({name,value,label,onChange,error}) => {
    return (
        <div className="form-group">
        <lable htmlFor={name}>{label}</lable>
        <input 
            onChange={onChange} 
            type="text" 
            name={name}
            value={value}
            id={name} 
            className="form-control"
        />
        {error && <div className="alert alert-danger">
            {error}
            </div>}
    </div>
      );
}
 
export default Input;