import React, { useState, useEffect } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
} from "recharts";

// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/Table";
import BigStat from "./components/BigStat/BigStat";

import AuthService from "../../services/auth/auth_service";

const mainChartData = getMainChartData();
const PieChartData = [
  { name: "Group A", value: 400, color: "primary" },
  { name: "Group B", value: 300, color: "secondary" },
  { name: "Group C", value: 300, color: "warning" },
  { name: "Group D", value: 200, color: "success" },
];

export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  // local
  var [mainChartState, setMainChartState] = useState("monthly");


  const [value, setValue] = useState({});

  useEffect(() => {
    AuthService.getCount().then(res => {

      console.log('hhhhh', res.data)
      setValue(res.data)
    })
  }, [])



  const [data, setData] = useState([]);
  const [questionsAnswered, setQuestionsAnswered] = useState('');

  useEffect(() => {
    AuthService.getReport().then(res => {

      console.log('hhhhh', res.data)
       setData(res.data.top_users_with_most_questions)
      setQuestionsAnswered(res.data.answered_users_count)
    })
  },[])

  return (
    <>
      <PageTitle title="Dashboard" button={<Button
        variant="contained"
        size="medium"
        color="secondary"
      >
        Latest Reports
      </Button>} />
      <Grid container spacing={4}>





        <Grid item md={4} sm={6} xs={12} >
          {/* <BigStat {...value} /> */}


          <Widget
            header={
              <div className={classes.title}>
                <Typography variant="h5">Total Questions</Typography>
              </div>
            }
            upperTitle
            bodyClass={classes.bodyWidgetOverflow}
          >
            <div className={classes.totalValueContainer}>
              <div className={classes.totalValue}>
                <Typography size="xxl" color="text" colorBrightness="secondary">
                  {value.question_count}

                </Typography>

              </div>

            </div>

          </Widget>
          </Grid>


          <Grid item md={4} sm={6} xs={12} >
          <Widget
            header={
              <div className={classes.title}>
                <Typography variant="h5">Total Complaints</Typography>
              </div>
            }
            upperTitle
            bodyClass={classes.bodyWidgetOverflow}
          >
            <div className={classes.totalValueContainer}>
              <div className={classes.totalValue}>
                <Typography size="xxl" color="text" colorBrightness="secondary">
                  {value.complaint_count}

                </Typography>

              </div>

            </div>

          </Widget>
          </Grid>



          <Grid item md={4} sm={6} xs={12} >
          <Widget
            header={
              <div className={classes.title}>
                <Typography variant="h5">Total Answered Questions</Typography>
              </div>
            }
            upperTitle
            bodyClass={classes.bodyWidgetOverflow}
          >
            <div className={classes.totalValueContainer}>
              <div className={classes.totalValue}>
                <Typography size="xxl" color="text" colorBrightness="secondary">
                  {value.answer_count}

                </Typography>

              </div>

            </div>

          </Widget>
          </Grid>




       

        <Grid item xs={12}>
          <Widget
            title={`Questions Report` }
            upperTitle
            noBodyPadding
            bodyClass={classes.tableWidget}
          >
            <Table data={data} />
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {
  var resultArray = [];
  var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
  var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
  var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

  for (let i = 0; i < tablet.length; i++) {
    resultArray.push({
      tablet: tablet[i].value,
      desktop: desktop[i].value,
      mobile: mobile[i].value,
    });
  }

  return resultArray;
}
