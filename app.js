//Require module
const express = require('express');
// Express Initialize
const app = express();
const port = 8000;
app.listen(port,()=> {
    console.log('listen port 8000');
});

//create api
app.get('/hello_world', (req,res)=>{
    res.send('Hello World');
});


const dashboardResponse = {
    dashboard1: [
      {
        name: "NGDC",
        location: "colo",
        count: 0,
        value: []
      },
      {
        name: "Colo",
        location: "colo",
        count: 0,
        value: []
      },
      {
        name: "MSR",
        location: "colo",
        count: 0,
        value: []
      },
      {
        name: "InfraCapsule",
        location: "colo",
        count: 0,
        value: []
      },
      {
        name: "Racks(NGDC)",
        location: "colo",
        count: 0,
        value: [
          {
            High_Density: 0
          },
          {
            Low_Density: 0
          }
        ]
      },
      {
        name: "Racks",
        location: "colo",
        count: 21,
        value: [
          {
            IC: 0
          },
          {
            MSR: 0
          },
          {
            COLO: 21
          }
        ]
      },
      {
        name: "iPDU(NGDC)",
        location: "colo",
        count: 0,
        value: [
          {
            MEPZ: 0
          },
          {
            CDC: 0
          }
        ]
      },
      {
        name: "iPDU",
        location: "colo",
        count: 38,
        value: [
          {
            IC: 0
          },
          {
            COLO: 38
          }
        ]
      }
    ],
    OS_Platform: [],
    Server_Live_Status: [],
    Device_Infratype: [],
    Equipment_Type: [],
    Host_Name: [],
    _id: "61d56ba4d946daece23aa6d3",
  };

app.get('/dashboard', (req, res) => {
    const location = req.query.location;
    setTimeout(function(){
      return res.send(dashboardResponse);
  }, 2000);
  });



const globalassetResposne = {Zone_Type:[{zone_type:"Non-DMZ",location:"Colo",zone_type_count:"60.71 %"},{zone_type:"DMZ",location:"Colo",zone_type_count:"39.29 %"}],Purpose_Infra_BU_:[{purpose:"BU",location:"Colo",purpose_count:"57.14 %"},{purpose:"Infra",location:"Colo",purpose_count:"42.86 %"}],Server_Infra_wise_Node_Count:[{device_infratype:"Standalone",location:"Colo",device_infratype_count:28}],Server_Category_Count:[{server_category:"Production",location:"Colo",server_category_count:25},{server_category:"Test",location:"Colo",server_category_count:3}],Year_Wise_OEM_Count:[{name:"DELL",data:[{year_of_purchase:"2017",count:28}]}],OEM_Wise_Warranty_AMC_count:[{name:"Warranty",location:"Colo",count:28}],OEM_Wise_Server_Count:[{oem_wise_server:"DELL",location:"Colo",oem_wise_server_count:28}],OEM_Wise_Infra:[{name:"DELL",data:[{os_name:"Standalone",count:28}]}],OEM_Wise_OS_distribution:[{name:"DELL",data:[{os_name:"VMWare",count:28}]}],Service_Line_Wise_Server_Count:[{service_line:"HCS-VM",location:"Colo",service_line_count:28}],OEM_Model_Wise_Year:[{name:"DELL",data:[{year_of_purchase:"2017",count:28}]}],_id:"61d576cdd946daece23aa6e2"};

app.get('/globalasset', (req, res) => {
    const location = req.query.location;
    console.log(location);
    setTimeout(function(){
      return res.send(globalassetResposne);
  }, 2000);
});
