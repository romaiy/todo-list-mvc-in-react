const getSelectedType = (type, code) => 
    type.find((n) => n.code === code);

export default getSelectedType;