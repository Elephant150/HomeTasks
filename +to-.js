var students = [
  {
    firstName: "Vitaly",
    surName: "Kreminsky",
    rating: 90
  },

    {
    firstName: "Vasil",
    surName: "Vaskiv",
    rating: 79
  },
    {
    firstName: "Dima",
    surName: "Koval",
    rating: 63
  },
    {
    firstName: "Den",
    surName: "Shapoval",
    rating: 76
  },
    {
    firstName: "Igor",
    surName: "Kohut",
    rating: 60
  },
    {
    firstName: "Vlad",
    surName: "Berkischuk",
    rating: 76
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
    rating: 68
  },
    {
    firstName: "Katerina",
    surName: "Panasiuk",
    rating: 82
  }
];
// console.log(students);
  function sortFn(prop){
    return function(a, b) {
      return b[prop] - a[prop];
    }
 }
 var newArray = students.sort(sortFn('rating'));

 console.log(newArray);