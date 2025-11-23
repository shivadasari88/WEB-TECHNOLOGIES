function nameLength(namesArray) {
    console.log("Original Array:", namesArray);

    const longNames = namesArray.filter(name => name.length>4)
    console.log(longNames.join(" "));
}

const emp_names =["joy","Meena","Anne","XI","Veena"];

nameLength(emp_names)