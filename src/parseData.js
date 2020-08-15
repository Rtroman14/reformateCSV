module.exports = (csvData) => {
    let newData = [];
    let contacts = [];

    csvData.forEach((rowOuter) => {
        let lastNameOuter = rowOuter[2];
        let scoreOuter = rowOuter[13];

        csvData.forEach((rowInner) => {
            let lastNameInner = rowInner[2];
            let scoreInner = rowInner[13];

            if (!contacts.includes(lastNameOuter)) {
                if (lastNameOuter == lastNameInner) {
                    if (scoreOuter == 7) {
                        contacts.push(lastNameOuter);
                        newData.push(rowOuter);
                    } else if (scoreOuter >= scoreInner) {
                        contacts.push(lastNameOuter);
                        newData.push(rowOuter);
                    }
                }
            }
        });
    });
    return newData;
};
