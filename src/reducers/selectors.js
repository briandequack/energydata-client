
const selectByName = (config)=>{
    const item = config.data.find((item) => item.name === config.name);
    return item ? item : null;
}

const selectors = {
    selectByName: selectByName
}

export default selectors