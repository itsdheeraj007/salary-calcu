
var salaryOperation ={
    hra (basicSalary){
        return basicSalary *0.50;
    },
    da(basicSalary){
        return basicSalary*0.20;
    },

    ma(basicSalary){
        return basicSalary*0.10;
    },
    ta(basicSalary){
    return basicSalary*0.5;
    },
    pf(basicSalary){
        return basicSalary*0.3;
    },
    gs(basicSalary)
   {
        return salaryOperation.hra(basicSalary)+salaryOperation.da(basicSalary)+
        salaryOperation.ma(basicSalary)+salaryOperation.ta(basicSalary)+salaryOperation.pf(basicSalary);
   },
   Net(basicSalary)
   {
        return salaryOperation.gs(basicSalary)-salaryOperation.pf(basicSalary);
   }
};