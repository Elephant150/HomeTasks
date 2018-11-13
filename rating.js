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

  const leadDist = () => {
    var leader = students[0];
    students.forEach(function(x){
        if (x.rating > leader.rating) leader = x;
    })

    var leadDist = students.map(function(x){
        x.rate = parseFloat((100 - (x.rating / leader.rating) * 100).toFixed(10));
        console.log(x);
    })
    console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|");
    console.log('LEADER ===>  ',leader);
    console.log("|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|*|");

}
leadDist();


