let jsonArray = [
    {
        "Name": "GeeksforGeeks",
        "Location": "Noida"
    },
    {
        "Courses": [
            "DSA self paced course",
            "DevOps Bootcamp",
            "GATE prepration course"
        ],
        "Topics": [
            "Web development",
            "Artificial Intelligence",
            "Machine Learning",
            "Data Science",
            "Algorithms"]
    },
];

jsonArray.forEach(function(Element){
    console.log(Element);
})