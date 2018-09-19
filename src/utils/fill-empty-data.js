export function fillEmptyData (data) {
    data.forEach((element, index) => {
        for(let key in element) {
            element[key] = element[key] || "-"
        }
        element['Id'] = index+1;
    });
    return data;
}
