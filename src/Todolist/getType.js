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
                {
                    code: "home",
                    name: "Home",
                },
                {
                    code: "work",
                    name: "Work",
                },
            ]);
        }, 500);
    });

export default getType;