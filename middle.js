var students = [
    {
        firstName: "Vitaly",
        surName: "Kreminsky",
        rating: 90
    },
    {
        firstName: "Vasil",
        surName: "Vaskiv",
        rating: 74
    },
    {
        firstName: "Dima",
        surName: "Koval",
        rating: 68
    },
    {
        firstName: "Den",
        surName: "Shapoval",
        rating: 70
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
        rating: 81
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

let middle = 0;
let z;
for (let keys in students) {
    middle += students[keys].rating;
}

z = Math.ceil(middle / students.length);

if (students.find(x => x.rating === z) === "undefined") {

}

console.log(students);
console.log("=>",students.find(x => x.rating === z));
console.log("=>", z);
