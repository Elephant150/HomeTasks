var students = [
    {
      firstName: "Vitaly",
      surName: "Kreminsky",
      rating: 90
    },
      {
      firstName: "Vasil",
      surName: "Vaskiv",
      rating: 76
    },
      {
      firstName: "Dima",
      surName: "Koval",
      rating: 63
    },
      {
      firstName: "Den",
      surName: "Shapoval",
      rating: 72
    },
      {
      firstName: "Igor",
      surName: "Kohut",
      rating: 60
    },
      {
      firstName: "Vlad",
      surName: "Berkischuk",
      rating: 78
    },
      {
      firstName: "Vasil",
      surName: "Fatyuk",
      rating: 91
    },
      {
      firstName: "Vitaly",
      surName: "Suhodolski",
      rating: 77
    },
      {
      firstName: "Vadim",
      surName: "Samoilov",
      rating: 98
    },
      {
      firstName: "Katerina",
      surName: "Panasiuk",
      rating: 80
    }
  ];

    function sortFn(prop){
      return function(a, b) {
        return b[prop] - a[prop];
      }
   }
  
   students.sort(function(a, b){
    if(a.firstName > b.firstName){
      return 1;
    }
    if(a.firstName < b.firstName){
      return -1;
    }
    return 0;
   });
   var newArray = students.sort(sortFn('firstName'));

   var m;
   for (var keys in students){
   m +=  students[keys].rating;
   }
   console.log(newArray);