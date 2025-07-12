using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System;
using System.IO;

namespace EmployeeApiDemo.Filters
{
    public class CustomExceptionFilter : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            var exception = context.Exception;
            File.AppendAllText("exceptions.txt", $"{DateTime.Now}: {exception.Message}{Environment.NewLine}");

            context.Result = new ObjectResult("An error occurred. Please contact support.")
            {
                StatusCode = 500
            };
            context.ExceptionHandled = true;
        }
    }
}
