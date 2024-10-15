import React, {useEffect, useState} from 'react';

const AboutPage = () => {
    const [allInfs, setAllInf] = useState<any>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(value => value.json())
            .then(response => {
                // console.log(response)
                setAllInf(response);
            });
    }, []);

    return (
        <div>
            {
                allInfs.map((allInf: any) => (
                    <>
                        <h2>{allInf.id}. {allInf.name}</h2>
                        <h3>{allInf.name} and {allInf.username}</h3>
                        <p> Street - {allInf.address.street} <br/>
                            suite - {allInf.address.suite} <br/>
                            city - {allInf.address.city}
                        </p>
                        <hr/>
                    </>
                ))

            }
        </div>
    );
};

export default AboutPage;