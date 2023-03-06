const toTypeOption = (type) => {
    const { code, name } = type;

    return {
        label: name,
        value: code,
    };
};

export default toTypeOption;