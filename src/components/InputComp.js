const InputComp = ({
  label,
  inputGroupName,
  className,
  name,
  placeholder,
  type,
  register,
  onChange,
  onBlur,
  value,
  ref,
}) => (
  <div
    className={inputGroupName}
    style={{ display: 'flex', flexDirection: 'column' }}
  >
    {label && (
      <label htmlFor={name} style={{ marginBottom: '0.5rem' }}>
        {label}
      </label>
    )}
    <input
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      id={name}
      className={className}
      placeholder={placeholder}
      value={value}
      ref={ref}
      {...register}
    />
  </div>
);

export default InputComp;
