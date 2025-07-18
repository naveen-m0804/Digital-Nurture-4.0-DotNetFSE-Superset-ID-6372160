using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace JwtAuthDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SecureDataController : ControllerBase
    {
        [Authorize]
        [HttpGet("protected")]
        public IActionResult GetProtectedData()
        {
            return Ok("This is a protected endpoint. Only authenticated users can see this.");
        }
    }
}
