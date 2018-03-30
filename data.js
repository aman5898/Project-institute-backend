// var today= new Date();

// var dd = today.getDate();
// var mm = today.getMonth()+1; 

// var yyyy = today.getFullYear();
// if(dd<10){
//     dd='0'+dd;
// } 
// if(mm<10){
//     mm='0'+mm;
// } 
// today = dd+'/'+mm+'/'+yyyy;



// var Rano={
//     [today]:"present"
// }
// var Yogesh={
//     [today]:"Absent"
// }

// var Vishal={
//     [today]:"Absent"
// }

// var chemistry12={
//     1:Rano,
//     2:Yogesh,
//     3:Vishal
// }



// var batch={
//     1: chemistry12,

// }



// teachers={

//     // batch: batch
// }



//  var newstudent={[today]: "absent"};

//  teachers.batch[1][Object.keys(teachers.batch[1]).length+1]=newstudent;

// console.log(teachers);


// var aman={
//     teachers:[{name:"aman"},{name:"ritik"}]
// }

// var teacherfirst=aman.teachers[0];

//  console.log(teacherfirst);

teachers = [{
    name: 'Aman Rajput',
    username: 'divyan01',
    contact: '7042958352',
    school: 'Jawahar Navodaya Vidyalaya',
    degree: 'Btech Computer Science',
    college: 'Maharaja Agrasen Institute of Technology',
    email: 'amankrsingh.2012@gmail.com',
    "batch": [{
            "student1": {
                "studentname": "sadfds"
            },
            "batchname": "adsf"
        },
        {
            "student1": {
                "studentname": "sadfds"
            },
            "student2": {
                "studentname": "adsf"
            },
            "batchname": "adsf"
        }
    ]
}]

console.log(teachers[0].batch[1].student1.studentname);


module.exports = {
    teachers: [{
        "name": "Aman Rajput",
        "username": "divyan01",
        "contact": "7042958352",
        "school": "Jawahar Navodaya Vidyalaya",
        "degree": "Btech Computer Science",
        "college": "Maharaja Agrasen Institute of Technology",
        "email": "amankrsingh.2012@gmail.com",
        "batch": [ {
            "student1": {
                "studentname": "Harshita",
                "attendance": [
                    {
                        "dayspresent": "2"
                    },
                    {
                        "date": "08/04/2018",
                        "present": "true"
                    },
                    {
                        "date": "31/03/2018",
                        "present": "false"
                    },
                    {
                        "date": "04/04/2018",
                        "present": "true"
                    }
                ]
            },
            "student2": {
                "studentname": "Pratham ",
                "attendance": [
                    {
                        "dayspresent": "2"
                    },
                    {
                        "date": "08/04/2018",
                        "present": "true"
                    },
                    {
                        "date": "31/03/2018",
                        "present": "true"
                    },
                    {
                        "date": "04/04/2018",
                        "present": "false"
                    }
                ]
            },
            "student3": {
                "studentname": "Rano",
                "attendance": [
                    {
                        "dayspresent": "1"
                    },
                    {
                        "date": "08/04/2018",
                        "present": "false"
                    },
                    {
                        "date": "31/03/2018",
                        "present": "true"
                    },
                    {
                        "date": "04/04/2018",
                        "present": "false"
                    }
                ]
            },
            "batchname": "12th chemistry"
        },
        {
            "student1": {
                "studentname": "Piyush",
                "attendance": [
                    {
                        "dayspresent": "2"
                    },
                    {
                        "date": "08/04/2018",
                        "present": "true"
                    },
                    {
                        "date": "31/03/2018",
                        "present": "true"
                    },
                    {
                        "date": "04/04/2018",
                        "present": "false"
                    }
                ]
            },
            "student2": {
                "studentname": "Aman",
                "attendance": [
                    {
                        "dayspresent": "2"
                    },
                    {
                        "date": "08/04/2018",
                        "present": "true"
                    },
                    {
                        "date": "31/03/2018",
                        "present": "false"
                    },
                    {
                        "date": "04/04/2018",
                        "present": "true"
                    }
                ]
            },
            "student3": {
                "studentname": "Ritik",
                "attendance": [
                    {
                        "dayspresent": "0"
                    },
                    {
                        "date": "08/04/2018",
                        "present": "false"
                    },
                    {
                        "date": "31/03/2018",
                        "present": "false"
                    },
                    {
                        "date": "04/04/2018",
                        "present": "false"
                    }
                ]
            },
            "student4": {
                "studentname": "Rahul",
                "attendance": [
                    {
                        "dayspresent": "3"
                    },
                    {
                        "date": "08/04/2018",
                        "present": "true"
                    },
                    {
                        "date": "31/03/2018",
                        "present": "true"
                    },
                    {
                        "date": "04/04/2018",
                        "present": "true"
                    }
                ]
            },
            "batchname": "11th chemistry"
        }
        ]
    }]
}