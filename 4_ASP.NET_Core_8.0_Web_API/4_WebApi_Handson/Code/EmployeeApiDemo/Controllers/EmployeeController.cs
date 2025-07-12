using Microsoft.AspNetCore.Mvc;
using EmployeeApiDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EmployeeApiDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        // Use target-typed new expressions for modern C#
        private static List<Employee> employees = new()
        {
            new Employee
            {
                Id = 1,
                Name = "John Doe",
                Salary = 50000,
                Permanent = true,
                Department = new() { Id = 1, Name = "HR" },
                Skills = new()
                {
                    new() { Id = 1, Name = "C#" },
                    new() { Id = 2, Name = "ASP.NET Core" }
                },
                DateOfBirth = new DateTime(1990, 1, 1)
            },
            new Employee
            {
                Id = 2,
                Name = "Jane Smith",
                Salary = 60000,
                Permanent = false,
                Department = new() { Id = 2, Name = "IT" },
                Skills = new()
                {
                    new() { Id = 3, Name = "JavaScript" },
                    new() { Id = 4, Name = "Angular" }
                },
                DateOfBirth = new DateTime(1992, 2, 2)
            }
        };

        // GET: api/Employee
        [HttpGet]
        public ActionResult<IEnumerable<Employee>> Get()
        {
            return Ok(employees);
        }

        // PUT: api/Employee/1
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(Employee), 200)]
        [ProducesResponseType(400)]
        public ActionResult<Employee> Put(int id, [FromBody] Employee updatedEmployee)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            var existingEmployee = employees.FirstOrDefault(e => e.Id == id);
            if (existingEmployee == null)
            {
                return BadRequest("Invalid employee id");
            }

            // Update fields
            existingEmployee.Name = updatedEmployee.Name;
            existingEmployee.Salary = updatedEmployee.Salary;
            existingEmployee.Permanent = updatedEmployee.Permanent;
            existingEmployee.Department = updatedEmployee.Department;
            existingEmployee.Skills = updatedEmployee.Skills;
            existingEmployee.DateOfBirth = updatedEmployee.DateOfBirth;

            return Ok(existingEmployee);
        }

        // POST: api/Employee
        [HttpPost]
        [ProducesResponseType(typeof(Employee), 201)]
        [ProducesResponseType(400)]
        public ActionResult<Employee> Post([FromBody] Employee emp)
        {
            if (emp == null)
                return BadRequest();

            emp.Id = employees.Count > 0 ? employees.Max(e => e.Id) + 1 : 1;
            employees.Add(emp);
            return CreatedAtAction(nameof(Get), new { id = emp.Id }, emp);
        }

        // DELETE: api/Employee/1
        [HttpDelete("{id}")]
        [ProducesResponseType(204)]
        [ProducesResponseType(400)]
        public IActionResult Delete(int id)
        {
            if (id <= 0)
            {
                return BadRequest("Invalid employee id");
            }

            var employee = employees.FirstOrDefault(e => e.Id == id);
            if (employee == null)
            {
                return BadRequest("Invalid employee id");
            }

            employees.Remove(employee);
            return NoContent();
        }
    }
}
