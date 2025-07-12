using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Linq;

namespace EmployeeApiDemo.Filters
{
    public class CustomAuthFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext context)
        {
            var hasAuth = context.HttpContext.Request.Headers.TryGetValue("Authorization", out var authHeader);
            if (!hasAuth)
            {
                context.Result = new BadRequestObjectResult("Invalid request - No Auth token");
                return;
            }
            if (!authHeader.Any(h => h.Contains("Bearer")))
            {
                context.Result = new BadRequestObjectResult("Invalid request - Token present but Bearer unavailable");
                return;
            }
            base.OnActionExecuting(context);
        }
    }
}
