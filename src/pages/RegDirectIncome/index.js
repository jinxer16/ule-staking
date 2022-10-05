import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getRegDirectIncomeReport } from "../../store/actions/dailyYield";
import moment from "moment";
import { CustomTable } from "../../components/CustomTable";

export const RegDirectIncome = () => {
  const [tabl, setTabl] = useState([])
  const user = localStorage?.getItem("user");
  let ress = JSON?.parse(user);
  let uId = ress?.uid;
  const fetchData = () => {
    fetch(`https://ulenftapis.ulenft.site/registrationDirectIncome?id=${uId}`)
      .then((response) => {
        return response.json();
      }).then((data) => {
        let user = data.data
        setTabl(user)
      })
  }
  useEffect(() => {
    fetchData();
  }, [])
  console.warn(tabl);
  return (
    <>
      <div class="content-wrapper">
        <div class="grid grid-1">
          <div class="section-heading">
            <h2>Registration Direct Income</h2>
          </div>
          <CustomTable
            columns={[
              { title: "S.No", field: "RowNumber" },
              { title: "From ID", field: "from_id" },
              { title: "Direct Income", field: "income" },
              { title: "Date", field: "dd" },
            ]}
            data={[...tabl]}
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
};

