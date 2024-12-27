package net.javaguides.ems.mapper;

import net.javaguides.ems.dto.EmployeeDto;
import net.javaguides.ems.entity.Employee;

public class EmployeeMapper {

    public static EmployeeDto maptoEmployeeDto(Employee employee){
        return new EmployeeDto(
               employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getEmail()
        );
    }

    public static Employee mapToEmployee(EmployeeDto employeeDto){

        if(employeeDto.getId() != null) {
            return new Employee(
                    employeeDto.getId(),
                    employeeDto.getFirstName(),
                    employeeDto.getLastName(),
                    employeeDto.getEmail()
            );
        } else {
            Employee emp = new Employee();
            emp.setFirstName(employeeDto.getFirstName());
            emp.setLastName(employeeDto.getLastName());
            emp.setEmail(employeeDto.getEmail());
            return emp;
        }

    }
}
