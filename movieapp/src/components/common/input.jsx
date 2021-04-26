const Input = ({name,value,label,onChange}) => {
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
    </div>
      );
}
 
export default Input;