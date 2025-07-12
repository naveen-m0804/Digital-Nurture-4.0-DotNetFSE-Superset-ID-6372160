using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace SwaggerDemoApi.Controllers
{
    [ApiController]
    [Route("api/Emp")]
    public class EmployeeController : ControllerBase
    {
        private static List<string> employees = new List<string> { "Alice", "Bob" };

        [HttpGet]
        [ActionName("GetAll")]
        [ProducesResponseType(typeof(List<string>), 200)]
        public IActionResult GetAll()
        {
            return Ok(employees);
        }

        [HttpGet("{id}")]
        [ActionName("GetById")]
        [ProducesResponseType(typeof(string), 200)]
        [ProducesResponseType(404)]
        public IActionResult GetById(int id)
        {
            if (id < 0 || id >= employees.Count)
                return NotFound();
            return Ok(employees[id]);
        }

        [HttpPost]
        [ActionName("Add")]
        [ProducesResponseType(201)]
        public IActionResult Add([FromBody] string name)
        {
            employees.Add(name);
            return CreatedAtAction(nameof(GetById), new { id = employees.Count - 1 }, name);
        }

        [HttpPut("{id}")]
        [ActionName("Update")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult Update(int id, [FromBody] string name)
        {
            if (id < 0 || id >= employees.Count)
                return NotFound();
            employees[id] = name;
            return NoContent();
        }

        [HttpDelete("{id}")]
        [ActionName("Delete")]
        [ProducesResponseType(204)]
        [ProducesResponseType(404)]
        public IActionResult Delete(int id)
        {
            if (id < 0 || id >= employees.Count)
                return NotFound();
            employees.RemoveAt(id);
            return NoContent();
        }
    }
}
