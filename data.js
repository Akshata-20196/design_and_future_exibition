FusionCharts.ready(function(){
    var chartObj = new FusionCharts({
type: 'multilevelpie',
renderAt: 'chart-container',
width: '700',
height: '700',
dataFormat: 'json',
dataSource: {
"chart": {
    "caption": "Design and Future Journey",
    "subcaption": "5 Weeks",
    "showPlotBorder": "1",
    "piefillalpha": "100",
    "pieborderthickness": "1",
    "hoverfillcolor": "#CCCCCC",
    "piebordercolor": "#FFFFFF",
    "hoverfillcolor": "#CCCCCC",
    "numberprefix": "$",
    "plottooltext": "$label, $$valueK, $percentValue",
    //Theme
    "theme": "fusion"
},
"category":[{
    "label": "Design and Future",
    "color": "#41f226",
   "value" : "500",
   "tootltext":"Design and Future",
"category": [{
    "label": "Group 1",
    "color":"#8daafc",
    "value": "150",
    "tooltext":"Aditya Jain,Sanjay Sudarshan,Aniruddha Naik,Roshni Sundar Rajan,Vikash Raj",
    "category": [{
        "label": "Internet Forums",
        "color": "#f8bd19",
        "value": "35",
        "tooltext": "Sensors + Intelligence,Products,Conversational agents/Chatbot,Internet Forums",
        "category": [{
            "label": "Aditya",
            "color": "#f8bd19",
            "value": "9.99",
            "tooltext":"<h1>Student 1</h1>",
            "link":"D:/SMI/Website/student_akshata.html"
        }, {
            "label": "Sanjay",
            "color": "#f8bd19",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html",
            "tooltext" : "<h1>Hello</h1>"
            
        }, {
            "label": "Aniruddha",
            "color": "#f8bd19",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        }, {
            "label": "Roshni",
            "color": "#f8bd19",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        },
        {
            "label": "Vikash",
            "color": "#f8bd19",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        }]
    }]},{
    "label": "Group 2",
    "color":"#8daafc",
    "value": "150",
    "tooltext":"Sudhanshu Rastogi,Zahid Nadim,Alryk Fonseca,Purvi Mehta,Ruchi Jain,Akshat Vats,Archita Johari,Vaishnavi Sridhar",
    "category":[{
        "label": "Sustainability",
        "color": "#33ccff",
        "value": "70",
        "tooltext": "Inclusive,Responsible Design,Social Innovation,Ecology,Sustainability",
        "category": [{
            "label": "Sudhanshu",
            "color": "#33ccff",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        }, {
            "label": "Zahid",
            "color": "#33ccff",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        }, {
            "label": "Alryk",
            "color": "#33ccff",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        }, {
            "label": "Purvi",
            "color": "#33ccff",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        },
        {
            "label": "Ruchi",
            "color": "#33ccff",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        },
        {
            "label": "Akshat",
            "color": "#33ccff",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        },
        {
            "label": "Archita",
            "color": "#33ccff",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        }, {
            "label": "Vaishnavi",
            "color": "#33ccff",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        }]
    }
    ]},{
    "label": "Group 3",
    "color":"#8daafc",
    "value": "150",
    "tooltext":"Ashish Yadav,Akshata Parate,Soumya Talwar,Namita Thomas,Shivam Gupta",
    "category":[{
        "label": "psychology",
        "color": "#ccff66",
        "value": "35",
        "tootltext":"Philosophy/death,Healthcare,Gender,More than human,Accessibility,Cognition/psychology",
        "category": [{
            "label": "Akshata",
            "color": "#ccff66",
            "value": "9.99",
            "tooltext":"Human psychology,Tech life, Technology, Addiction, Social Media, Digital Natives,conception, Digital Wellbeing,Social Media,Addiction,Human Health, Depression",
            "link":"D:/SMI/Website/student_akshata.html"
        }, {
            "label": "Namita",
            "color": "#ccff66",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        },{
            "label": "Shivam",
            "color": "#ccff66",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        },
        {
            "label": "Saumya",
            "color": "#ccff66",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        },{
            "label": "Aashish",
            "color": "#ccff66",
            "value": "9.99",
            "link":"D:/SMI/Website/student_akshata.html"
        }
        ]
    }]
},
   {
   "label": "Group 4",
       "color":"#8daafc",
       "value": "150",
       "tooltext":"Ananthakrishnan M,Abinaya Nagappan,Ulhas Abraham,Anantha Padmanaban,Aishwarya Manjunath,Aayush Saraf",
           "category":
           [
           {
               "label": "Gamification",
               "color": "#eff298",
               "value": "35",
               "tooltext":"Immersive/AR/VR,EdTech/Learning,Games,Gamification",
               "category":
           [
               {
                   "label": "Ananthakrishnan",
                   "color": "#eff298",
                   "value": "9.99",
                   "link":"D:/SMI/Website/student_akshata.html"
               }, {
                   "label": "Abinaya",
                   "color": "#eff298",
                   "value": "9.99",
                   "link":"D:/SMI/Website/student_akshata.html"
               },
               {
                   "label": "Ulhas",
                   "color": "#eff298",
                   "value": "9.99",
                   "link":"D:/SMI/Website/student_akshata.html"
               },
               {
                   "label": "Anantha",
                   "color": "#eff298",
                   "value": "9.99",
                   "link":"D:/SMI/Website/student_akshata.html"
               },
               {
                   "label": "Aishwarya",
                   "color": "#eff298",
                   "value": "9.99",
                   "link":"D:/SMI/Website/student_akshata.html"
               },
               {
                   "label": "Aayush",
                   "color": "#eff298",
                   "value": "9.99",
                   "link":"D:/SMI/Website/student_akshata.html"
               }
           ]
           }
           ]
   }  
]
}]
}
});
    chartObj.render();
});