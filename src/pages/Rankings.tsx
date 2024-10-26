import React, {useEffect, useState} from 'react';
import axios from "axios";
import Layout from "../components/Layout";

const Rankings = () => {
    const [rankings, setRankings] = useState([]);

    useEffect(() => {
        (
            async () => {
                const {data} = await axios.get('http://34.172.125.16/user/api/ambassador/rankings');

                setRankings(data);
            }
        )();
    }, []);

    return (
        <Layout>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Revenue</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(rankings).map((key: any, index) => {
                        return (
                            <tr key={key}>
                                <td>{index + 1}</td>
                                <td>{key}</td>
                                <td>{rankings[key]}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default Rankings;
