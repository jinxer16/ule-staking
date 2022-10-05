import { useEffect, useState } from "react";
import { CustomTable } from "../../components/CustomTable";
import axios from "axios";
import { API } from "../../store/actions/API";

export const ReinvestmentHistory = () => {

    const user = localStorage.getItem("user");
    let ress = JSON.parse(user);
    let uId = ress?.user_id;
    const [dataState, setDateState] = useState([]);

    const ReinvestmentHistoryApi = async () => {
        const res = await API.get(`/reinvestmentDetails?id=${uId}`);
        if (res?.data?.success) {
            setDateState(res.data.data)
        }
    }

    useEffect(() => {
        ReinvestmentHistoryApi();
    }, []);

    return (
        <>
            <div class="content-wrapper">
                <div class="grid grid-1">
                    <div class="section-heading">
                        <h2>Reinvestment History</h2>
                    </div>
                    <CustomTable
                        columns={[
                            { title: "S.No", field: "RowNumber" },
                            { title: "ID", field: "uid" },
                            { title: "Amount", field: "amountlist" },
                            { title: "Txn", field: "txn" },
                            { title: "Date", field: "dd" },
                        ]}
                        data={[...dataState]}
                        title=""
                        toolbar={false}
                    />
                </div>
            </div>
            <div class="clearfix">
                <br />
            </div>

            <br />
            <br />
            <div class="footer-section">
                Copyright © 2022 Yeepule. All Rights Reserved.
            </div>
            <link
                rel="stylesheet"
                type="text/css"
                href="assets/css/2.d34346ea.chunk.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="assets/css/main.f70df022.chunk.css"
            />
        </>
    );
}

