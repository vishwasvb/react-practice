const Input = ({name,value,label,onChange,error,type}) => {
    return (
        <div className="form-group">
        <lable htmlFor={name}>{label}</lable>
        <input 
            onChange={onChange} 
            type={type} 
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