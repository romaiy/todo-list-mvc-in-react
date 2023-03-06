const getType = () => 
    new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    code: "sport",
                    name: "Sport",
                },
                {
                    code: "reading",
                    name: "Reading",
                },
                {
                    code: "hobby",
                    name: "Hobby",
                },
            ]);
        }, 500);
    });

export default getType;