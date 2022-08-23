function compute(){
     var basicSalary=document.getElementById('salary').value;
     basicSalary=parseInt(basicSalary);
     document.getElementById('hra').innerText=salaryOperation.hra(basicSalary);
     document.getElementById('da').innerText=salaryOperation.da(basicSalary);
     document.getElementById('ma').innerText=salaryOperation.ma(basicSalary);
     document.getElementById('ta').innerText=salaryOperation.ta(basicSalary);
     document.getElementById('pf').innerText=salaryOperation.pf(basicSalary);
     document.getElementById('gs').innerText=salaryOperation.gs(basicSalary);
     document.getElementById('net').innerText=salaryOperation.Net(basicSalary);

}