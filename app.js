//Require module
const express = require('express');
// Express Initialize
const cors = require("cors");
const app = express();

app.use(cors());

const port = 8000;
app.listen(port,()=> {
    console.log('listen port 8000');
});

//create api
app.get('/hello_world', (req,res)=>{
    res.send('Hello World');
});


const dashboardResponse = {
  "dashboard1_2": [
    {
      "name": "NGDC",
      "location": "NGDC",
      "count": 50,
      "value": []
    },
    {
      "name": "Colo",
      "location": "NGDC",
      "count": 28,
      "value": []
    },
    {
      "name": "MSR",
      "location": "NGDC",
      "count": 1,
      "value": []
    },
    {
      "name": "InfraCapsule",
      "location": "NGDC",
      "count": 1,
      "value": []
    },
    {
      "name": "Racks(NGDC)",
      "location": "NGDC",
      "count": 0,
      "value": [
        {
          "High Density": 0
        },
        {
          "Low Density": 0
        }
      ]
    },
    {
      "name": "Racks",
      "location": "NGDC",
      "count": 21,
      "value": [
        {
          "IC": 0
        },
        {
          "MSR": 0
        },
        {
          "COLO": 21
        }
      ]
    },
    {
      "name": "iPDU(NGDC)",
      "location": "NGDC",
      "count": 0,
      "value": [
        {
          "MEPZ": 0
        },
        {
          "CDC": 0
        }
      ]
    },
    {
      "name": "iPDU",
      "location": "NGDC",
      "count": 38,
      "value": [
        {
          "IC": 0
        },
        {
          "COLO": 38
        }
      ]
    }
  ],
  "OS_Platform": [
    {
      "name": "Non-DMZ",
      "count": 2,
      "value": ""
    },
    {
      "name": "Windows",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Non Windows",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Chasis",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Hypervisor",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Scalable Node",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Backup Appliance",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "DMZ",
      "count": 2,
      "value": ""
    },
    {
      "name": "Windows",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Non Windows",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Chasis",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Hypervisor",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Scalable Node",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Backup Appliance",
      "location": "NGDC",
      "count": 0,
      "value": []
    }
  ],
  "Server_Live_Status": [
    {
      "name": "Deployed",
      "location": "NGDC",
      "count": 4,
      "value": []
    },
    {
      "name": "Stock server",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "E-waste server",
      "location": "NGDC",
      "count": 0,
      "value": []
    }
  ],
  "Device_Infratype": [
    {
      "name": "Standalone",
      "location": "NGDC",
      "count": 4,
      "value": []
    },
    {
      "name": "Hyper converged Infra",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Converged Infra",
      "location": "NGDC",
      "count": 0,
      "value": []
    }
  ],
  "Equipment_Type": [
    {
      "name": "Generic Rack Server",
      "location": "NGDC",
      "count": 2,
      "value": []
    },
    {
      "name": "Appliance",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Backup Devices",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Storage Devices",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Blade Server",
      "location": "NGDC",
      "count": 1,
      "value": []
    },
    {
      "name": "Appliance",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Backup Devices",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Storage Devices",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "CI",
      "location": "NGDC",
      "count": 1,
      "value": []
    },
    {
      "name": "Appliance",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Backup Devices",
      "location": "NGDC",
      "count": 0,
      "value": []
    },
    {
      "name": "Storage Devices",
      "location": "NGDC",
      "count": 0,
      "value": []
    }
  ],
  "Host_Name": [
    {
      "name": "AUMELIESX001",
      "location": "NGDC",
      "count": 1,
      "value": []
    },
    {
      "name": "AUMELIESX005",
      "location": "NGDC",
      "count": 1,
      "value": []
    },
    {
      "name": "AUMELIESX002",
      "location": "NGDC",
      "count": 1,
      "value": []
    },
    {
      "name": "AUMELIESX004",
      "location": "NGDC",
      "count": 1,
      "value": []
    }
  ],
  "_id": "61d7fbdb4304a30dcb548ce4"
};

app.get('/dashboard', (req, res) => {
    const location = req.query.location;
    setTimeout(function(){
      return res.send(dashboardResponse);
  }, 2000);
  });



const globalassetResposne = {
  Zone_Type: [
    { name: "Non-DMZ", y: 60.71, color: "#717AA3" },
    { name: "DMZ", y: 39.29, color: "#BFE9EC" },
  ],
  Purpose_Infra_BU_: [
    { name: "BU", y: 57.14, color: "#BFE9EC" },
    { name: "Infra", y: 42.86, color: "#717AA3" },
  ],
  Server_Infra_wise_Node_Count: [
    { name: "Standalone", data: [28], color: "#717AA3" },
  ],

  Server_Category_Count: [
    {
      name: "Production",
      data: [25],
      color: "#d63384",
    },
    { name: "Test", data: [3], color: "#717AA3" },
  ],

  Year_Wise_OEM_Count: [
    { name: "DELL", data: [{ name: "2017", data: [28], color: "#ee82ee" }] },
  ],
  OEM_Wise_Warranty_AMC_count: [
    { name: "Warranty", data: [28], color: "#d63384" },
  ],
  OEM_Wise_Server_Count: [
    { name:"DELL",data:[28],color:"#717AA3" },
  ],
  OEM_Wise_Infra: [
    { name: "DELL", data: [{ name:"Standalone",data:[28],color:"#efa25c" }] },
  ],
  OEM_Wise_OS_distribution: [
    { name: "DELL", data: [{ os_name:"VMWare",data:[28],color:"#d63384"}] },
  ],
  Service_Line_Wise_Server_Count: [
    { name:"HCS-VM",data:[28],color:"#717AA3" }
  ],
  OEM_Model_Wise_Year: [
    { name: "DELL", data: [{ name:"2017",data:[28],color:"#6495ED" }] },
  ],
  _id: "61d576cdd946daece23aa6e2",
};

app.get('/globalasset', (req, res) => {
    const location = req.query.location;
    setTimeout(function(){
      return res.send(globalassetResposne);
  }, 2000);
});



const rackUCapacityRepsonse = [
  {
    "Rack_name": "R-AH8",
    "Free": 10,
    "Used": 20
  },
  {
    "Rack_name": "R-BH9",
    "Free": 10,
    "Used": 10
  },
  {
    "Rack_name": "R-CH4",
    "Free": 10,
    "Used": 30
  },
  {
    "Rack_name": "R-DE7",
    "Free": 40,
    "Used": 20
  },
];

app.get('/rack_u_capacity', (req, res) => {
  setTimeout(function(){
    return res.send(rackUCapacityRepsonse);
}, 2000);
});


const rack_wise_device_availability_resp = [
  {
    "rack_name": "R-BG12",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-AH8",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-BL12",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-BE12",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-AF55",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "CE32-A-4",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-AJ55",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-BC12",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-BD12",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-BJ12",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-AX13",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-BK12",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-AE55",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-BH12",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-BF12",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-BM12",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "CG44-A-R-10",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-AC13",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-BI12",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-AF8",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-AD8",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-AG55",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "CG44-A-R-3",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "CE32-A-6",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "CG44-A-R-2",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-AK55",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-AL55",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "rack_name": "R-AF13",
    "value": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  }
];

app.get('/rack_wise_device_availability', (req, res) => {
  setTimeout(function(){
    return res.send(rack_wise_device_availability_resp);
}, 2000);
});




const rack_wise_device_u_size = [
  {
    "u-height": "1",
    "data": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "u-height": "2",
    "data": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  },
  {
    "u-height": "3",
    "data": [
      {
        "name": "CI",
        "count": 8
      },
      {
        "name": "Blade Server",
        "count": 6
      },
      {
        "name": "Generic Rack Server",
        "count": 8
      },
      {
        "name": "HCI",
        "count": 6
      }
    ]
  }
];

app.get('/rack_wise_device_u_size', (req, res) => {
  setTimeout(function(){
    return res.send(rack_wise_device_u_size_resp);
}, 2000);
});

const rack_ipdu_power_usage_resp = [
  {
    "name": "Right",
    "value": 45
  },
  {
    "name": "Left",
    "value": 45
  }
];

app.get('/rack_ipdu_power_usage', (req, res) => {
  setTimeout(function(){
    return res.send(rack_ipdu_power_usage_resp);
}, 2000);
});


host_search_resp = [
  {
    "key": "hostname",
    "value": "pune-1234"
  },
  {
    "key": "make",
    "value": "xxxxxx"
  },
  {
    "key": "model",
    "value": "xxxxxx"
  },
  {
    "key": "serialNo",
    "value": "xxxxxx"
  },
  {
    "key": "region",
    "value": "xxxxxx"
  },
  {
    "key": "country",
    "value": "xxxxxx"
  },
  {
    "key": "dcName",
    "value": "xxxxxx"
  },
  {
    "key": "dcInfra",
    "value": "xxxxxx"
  },
  {
    "key": "row",
    "value": "xxxxxx"
  },
  {
    "key": "region",
    "value": "xxxxxx"
  },
  {
    "key": "uPosition",
    "value": "xxxxxx"
  },
  {
    "key": "ipAddress",
    "value": "xxxxxx"
  },
  {
    "key": "mgmtIp",
    "value": "xxxxxx"
  },
  {
    "key": "os",
    "value": "xxxxxx"
  },
  {
    "key": "serverInfraType",
    "value": "xxxxxx"
  },
  {
    "key": "processor",
    "value": "xxxxxx"
  },
  {
    "key": "cpuSocket",
    "value": "xxxxxx"
  },
  {
    "key": "corePerSocket",
    "value": "xxxxxx"
  },
  {
    "key": "ram",
    "value": "xxxxxx"
  },
  {
    "key": "hdd",
    "value": "xxxxxx"
  },
  {
    "key": "serverHealthStatus",
    "value": "xxxxxx"
  },
  {
    "key": "firmware",
    "value": "xxxxxx"
  },
  {
    "key": "warrantyStatus",
    "value": "xxxxxx"
  },
  {
    "key": "serverStatus",
    "value": "xxxxxx"
  },
  {
    "key": "serverTemperature",
    "value": "xxxxxx"
  },
  {
    "key": "serviceTower",
    "value": "xxxxxx"
  },
  {
    "key": "serviceLine",
    "value": "xxxxxx"
  },
  {
    "key": "servicesOffered",
    "value": ["service1", "service2"]
  }
];

app.get('/host_search', (req, res) => {
  setTimeout(function(){
    return res.send(host_search_resp);
}, 2000);
});
