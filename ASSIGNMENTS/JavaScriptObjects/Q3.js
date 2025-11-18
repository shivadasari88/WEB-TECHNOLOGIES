function Employee(){
     emps = []
    for(i=0;i<5;i++){
        emps[i] = (prompt(`Enter ${i}th emp name : `))
    }
    emps.sort();
    for(i=0;i<5;i++){
        document.writeln(emps[i]+
            "<br>"
        );
    }

}

Employee()